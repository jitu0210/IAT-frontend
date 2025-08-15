import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import QRCode from "react-qr-code"; // Only keep this if you need QR code

const STORAGE_KEY = "intern-groups-data";

// Put your public Google Form link here
const GOOGLE_FORM_LINK = "https://forms.gle/example"; // must not be empty

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

  const archiveGroup = (id) =>
    setGroups(groups.map((g) => (g.id === id ? { ...g, archived: true } : g)));

  const unarchiveGroup = (id) =>
    setGroups(groups.map((g) => (g.id === id ? { ...g, archived: false } : g)));

  const deleteGroup = (id) => {
    if (window.confirm("Are you sure you want to permanently delete this group?")) {
      setGroups(groups.filter((g) => g.id !== id));
    }
  };

  const shareOnWhatsApp = () => {
    if (!GOOGLE_FORM_LINK) {
      alert("Google Form link is not set.");
      return;
    }
    const url = `https://wa.me/?text=${encodeURIComponent(
      `Check out this form: ${GOOGLE_FORM_LINK}`
    )}`;
    window.open(url, "_blank");
  };

  const copyLink = () => {
    if (!GOOGLE_FORM_LINK) {
      alert("Google Form link is not set.");
      return;
    }
    navigator.clipboard.writeText(GOOGLE_FORM_LINK);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto p-6 space-y-12">
        {/* QR Code Section */}
        <section className="bg-neutral-900 border border-gray-700 rounded-lg p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Access Form via QR</h2>
          {GOOGLE_FORM_LINK ? (
            <>
              <div className="flex justify-center mb-4">
                <QRCode value={GOOGLE_FORM_LINK} size={150} bgColor="#000000" fgColor="#FFFFFF" />
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={shareOnWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Share via WhatsApp
                </button>
                <button
                  onClick={copyLink}
                  className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg transition"
                >
                  Copy Link
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-400">No form link available</p>
          )}
        </section>

        {/* Groups Section */}
        <section className="bg-neutral-900 border border-gray-700 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-8 border-b border-gray-600 pb-3">
            Manage Groups
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Enter group name"
              value={newGroupName}
              onChange={(e) => {
                setNewGroupName(e.target.value);
                setErrorMsg("");
              }}
              className="flex-grow border border-gray-600 rounded-lg px-4 py-3 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              onClick={addGroup}
              className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Add Group
            </button>
          </div>

          {errorMsg && <p className="text-red-400 mb-4">{errorMsg}</p>}

          {groups.length === 0 ? (
            <p className="text-gray-400 italic">No groups added yet.</p>
          ) : (
            <ul className="space-y-4">
              {groups.map(({ id, name, archived }) => (
                <li
                  key={id}
                  className={`flex flex-col sm:flex-row justify-between items-start sm:items-center border rounded-lg px-6 py-4 transition ${
                    archived
                      ? "opacity-50 border-gray-600 bg-neutral-800"
                      : "border-white hover:shadow-lg"
                  }`}
                >
                  {archived ? (
                    <span className="line-through text-gray-400">{name} (Archived)</span>
                  ) : (
                    <Link to={`/groups/${id}`} className="font-semibold hover:underline">
                      {name}
                    </Link>
                  )}
                  <div className="mt-3 sm:mt-0 space-x-2">
                    {archived ? (
                      <button
                        onClick={() => unarchiveGroup(id)}
                        className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
                      >
                        Unarchive
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => archiveGroup(id)}
                          className="bg-gray-500 px-4 py-2 rounded hover:bg-gray-600"
                        >
                          Archive
                        </button>
                        <button
                          onClick={() => deleteGroup(id)}
                          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
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
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;