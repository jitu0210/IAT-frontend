import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Footer from "./Footer.jsx"

const STORAGE_KEY = "intern-groups-data";

const Home = () => {
  const navigate = useNavigate();

  const [groups, setGroups] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved).groups || [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [newGroupName, setNewGroupName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ groups }));
  }, [groups]);

  const addGroup = () => {
    const trimmed = newGroupName.trim();
    if (!trimmed) {
      setErrorMsg("Group name cannot be empty.");
      return;
    }
    if (groups.some((g) => g.name.toLowerCase() === trimmed.toLowerCase())) {
      setErrorMsg("Group name already exists.");
      return;
    }
    const newGroup = {
      id: Date.now().toString(),
      name: trimmed,
      candidates: [],
      archived: false,
    };
    setGroups([...groups, newGroup]);
    setNewGroupName("");
    setErrorMsg("");
    navigate(`/groups/${newGroup.id}`);
  };

  const archiveGroup = (id) => {
    setGroups(groups.map((g) => (g.id === id ? { ...g, archived: true } : g)));
  };

  const unarchiveGroup = (id) => {
    setGroups(groups.map((g) => (g.id === id ? { ...g, archived: false } : g)));
  };

  const deleteGroup = (id) => {
    if (
      window.confirm(
        "Are you sure you want to permanently delete this group? This cannot be undone."
      )
    ) {
      setGroups(groups.filter((g) => g.id !== id));
    }
  };

 return (
  
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl rounded-lg border-2 border-purple-700 p-8 shadow-lg">
        <h2 className="text-purple-800 text-4xl font-extrabold mb-8 border-b-4 border-purple-700 pb-3">
          Groups
        </h2>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
          <input
            type="text"
            placeholder="Enter group name"
            value={newGroupName}
            onChange={(e) => {
              setNewGroupName(e.target.value);
              setErrorMsg("");
            }}
            className="flex-grow border-2 border-purple-300 rounded-lg px-4 py-3 text-lg text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-500 transition"
          />
          <button
            onClick={addGroup}
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-3 rounded-lg transition text-lg"
          >
            Add
          </button>
        </div>

        {errorMsg && (
          <p className="text-red-600 mb-6 text-center font-semibold">{errorMsg}</p>
        )}

        {groups.length === 0 ? (
          <p className="text-purple-500 text-center text-lg italic">
            No groups added yet.
          </p>
        ) : (
          <ul className="space-y-4">
            {groups.map(({ id, name, archived }) => (
              <li
                key={id}
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center border-2 rounded-lg px-6 py-4 transition-opacity duration-300 ${
                  archived
                    ? "opacity-50 bg-purple-50 cursor-not-allowed border-purple-300"
                    : "border-purple-700 hover:shadow-lg"
                }`}
              >
                {archived ? (
                  <span className="text-purple-400 font-semibold text-lg line-through">
                    {name} (Archived)
                  </span>
                ) : (
                  <Link
                    to={`/groups/${id}`}
                    className="text-purple-700 font-semibold hover:underline text-lg"
                  >
                    {name}
                  </Link>
                )}

                <div className="mt-3 sm:mt-0 space-x-2 flex flex-wrap">
                  {archived ? (
                    <button
                      onClick={() => unarchiveGroup(id)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-semibold text-sm"
                      title="Unarchive Group"
                      aria-label={`Unarchive group ${name}`}
                    >
                      Unarchive
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => archiveGroup(id)}
                        className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition font-semibold text-sm"
                        title="Archive Group"
                        aria-label={`Archive group ${name}`}
                      >
                        Archive
                      </button>
                      <button
                        onClick={() => deleteGroup(id)}
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition ml-2 font-semibold text-sm"
                        title="Delete Group"
                        aria-label={`Delete group ${name}`}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};


export default Home;
