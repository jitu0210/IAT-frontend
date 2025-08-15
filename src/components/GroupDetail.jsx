import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const STORAGE_KEY = "intern-groups-data";

const departmentsList = [
  "Mechanical",
  "Computer Science (CSE)",
  "Electrical (EX)",
  "Electronics & Communication (EC)",
  "MBA",
];

const GroupDetail = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const [group, setGroup] = useState(null);
  const [candidateForm, setCandidateForm] = useState({
    name: "",
    branch: "",
    qualities: "",
  });

  // Load group from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) throw new Error("No data found.");
      const data = JSON.parse(saved);
      const foundGroup = data.groups.find((g) => g.id === groupId);
      if (!foundGroup) throw new Error("Group not found.");
      setGroup(foundGroup);
    } catch (err) {
      alert(err.message);
      navigate("/home");
    }
  }, [groupId, navigate]);

  // Save group to localStorage
  useEffect(() => {
    if (!group) return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      const data = JSON.parse(saved);
      const updatedGroups = data.groups.map((g) =>
        g.id === group.id ? group : g
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ groups: updatedGroups }));
    } catch {}
  }, [group]);

  const handleInputChange = (e) => {
    setCandidateForm({ ...candidateForm, [e.target.name]: e.target.value });
  };

  const addCandidate = async () => {
    const { name, branch, qualities } = candidateForm;
    if (!name.trim() || !branch.trim() || !qualities.trim()) {
      alert("Please fill all fields.");
      return;
    }

    const now = new Date();
    const date = now.toLocaleDateString("en-IN");
    const time = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

    const newCandidate = {
      id: Date.now().toString(),
      name: name.trim(),
      branch,
      qualities: qualities.trim(),
      dateOfJoining: `${date} ${time}`,
    };

    setGroup((prev) => ({
      ...prev,
      candidates: [...prev.candidates, newCandidate],
    }));

    try {
      await axios.post("", newCandidate); // Backend endpoint placeholder
    } catch (err) {
      console.log("Backend save skipped:", err.message);
    }

    setCandidateForm({ name: "", branch: "", qualities: "" });
  };

  const deleteCandidate = (id) => {
    if (window.confirm("Are you sure you want to delete this candidate?")) {
      setGroup({
        ...group,
        candidates: group.candidates.filter((c) => c.id !== id),
      });
    }
  };

  if (!group) return null;

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="p-4 bg-neutral-900 border-b border-gray-700 flex justify-between items-center">
        <h1 className="text-xl font-bold">{group.name} - Candidates</h1>
        <Link
          to="/home"
          className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          &larr; Back
        </Link>
      </header>

      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-10 bg-neutral-900 p-6 rounded-lg border border-gray-700">
          <h2 className="text-lg font-semibold mb-4">Add Candidate</h2>
          <input
            type="text"
            name="name"
            placeholder="Candidate Name"
            value={candidateForm.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg mb-3 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <select
            name="branch"
            value={candidateForm.branch}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg mb-3 bg-black text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="" disabled>
              -- Select Department --
            </option>
            {departmentsList.map((dep) => (
              <option key={dep} value={dep}>
                {dep}
              </option>
            ))}
          </select>
          <textarea
            name="qualities"
            placeholder="Qualities / Description"
            value={candidateForm.qualities}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg mb-4 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
          />
          <button
            onClick={addCandidate}
            className="w-full bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition"
          >
            Add Candidate
          </button>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Candidate List</h3>
          {group.candidates.length === 0 ? (
            <p className="text-gray-400">No candidates added yet.</p>
          ) : (
            <ul className="space-y-4 max-h-[500px] overflow-y-auto">
              {group.candidates.map(
                ({ id, name, branch, qualities, dateOfJoining }) => (
                  <li
                    key={id}
                    className="bg-neutral-900 p-4 rounded-lg border border-gray-700 flex flex-col md:flex-row md:justify-between md:items-center"
                  >
                    <div>
                      <h4 className="font-semibold text-white text-lg">{name}</h4>
                      <p className="text-gray-300">Branch: {branch}</p>
                      <p className="text-gray-400 mt-1 whitespace-pre-line">
                        {qualities}
                      </p>
                      <p className="text-gray-500 mt-2 text-sm">
                        Date & Time of Joining: {dateOfJoining}
                      </p>
                    </div>

                    <div className="mt-3 md:mt-0 flex gap-2">
                      <button
                        onClick={() => navigate(`/candidate-performance/${id}`)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg"
                      >
                        Performance
                      </button>
                      <button
                        onClick={() => deleteCandidate(id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                )
              )}
            </ul>
          )}
        </section>
      </main>

      <footer className="bg-neutral-900 border-t border-gray-700 text-center p-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Aartech Solonics Limited
      </footer>
    </div>
  );
};

export default GroupDetail;
