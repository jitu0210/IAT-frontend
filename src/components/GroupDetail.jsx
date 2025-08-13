import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const STORAGE_KEY = "intern-groups-data";

const GroupDetail = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const [group, setGroup] = useState(null);
  const [candidateForm, setCandidateForm] = useState({
    name: "",
    branch: "",
    qualities: "",
  });

  // Load group data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        const foundGroup = data.groups.find((g) => g.id === groupId);
        if (!foundGroup) {
          alert("Group not found.");
          navigate("/");
        } else {
          setGroup(foundGroup);
        }
      } catch {
        alert("Failed to load data.");
        navigate("/");
      }
    } else {
      alert("No data found.");
      navigate("/");
    }
  }, [groupId, navigate]);

  // Update localStorage whenever group changes (candidates added)
  useEffect(() => {
    if (!group) return;

    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
      const data = JSON.parse(saved);
      const updatedGroups = data.groups.map((g) => (g.id === group.id ? group : g));
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ groups: updatedGroups }));
    } catch {
      // ignore errors
    }
  }, [group]);

  const handleInputChange = (e) => {
    setCandidateForm({ ...candidateForm, [e.target.name]: e.target.value });
  };

  const addCandidate = () => {
    const { name, branch, qualities } = candidateForm;
    if (!name.trim() || !branch.trim() || !qualities.trim()) {
      alert("Please fill in all candidate fields.");
      return;
    }

    setGroup({
      ...group,
      candidates: [
        ...group.candidates,
        {
          id: Date.now().toString(),
          name: name.trim(),
          branch: branch.trim(),
          qualities: qualities.trim(),
        },
      ],
    });

    setCandidateForm({ name: "", branch: "", qualities: "" });
  };

  if (!group) {
    return null; // or loading spinner
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="p-5 bg-purple-700 text-white text-3xl font-bold flex justify-between items-center">
        <div>{group.name} - Candidates</div>
        <Link
          to="/home"
          className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-purple-200 transition"
        >
          &larr; Back to Groups
        </Link>
      </header>

      <main className="flex-grow max-w-4xl mx-auto p-8">
        
        <section className="mb-10 max-w-lg mx-auto">
          <h2 className="text-purple-700 text-2xl font-bold mb-4">Add Candidate</h2>
          <input
            type="text"
            name="name"
            placeholder="Candidate Name"
            value={candidateForm.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            name="branch"
            placeholder="Branch"
            value={candidateForm.branch}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="qualities"
            placeholder="Qualities / Description"
            value={candidateForm.qualities}
            onChange={handleInputChange}
            rows={4}
            className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          />
          <button
            onClick={addCandidate}
            className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 transition"
          >
            Add Candidate
          </button>
        </section>

        {/* Candidate List */}
        <section>
          <h3 className="text-purple-700 text-xl font-semibold mb-6">Candidate List</h3>
          {group.candidates.length === 0 ? (
            <p className="text-gray-500">No candidates added yet.</p>
          ) : (
            <ul className="space-y-5 max-w-lg">
              {group.candidates.map(({ id, name, branch, qualities }) => (
                <li
                  key={id}
                  className="border border-purple-700 rounded p-4 shadow hover:shadow-lg transition"
                >
                  <h4 className="text-purple-700 font-semibold text-lg mb-1">{name}</h4>
                  <p className="font-medium text-gray-800 mb-1">Branch: {branch}</p>
                  <p className="text-gray-700 whitespace-pre-line">{qualities}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer className="bg-purple-700 text-white text-center p-4 select-none">
        © {new Date().getFullYear()} Aartech Solonics Limited
      </footer>
    </div>
  );
};

export default GroupDetail;
