import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CandidatePerformance = () => {
  const { candidateId } = useParams();
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        // Replace "" with your backend endpoint
        const res = await axios.get(`/api/performance/${candidateId}`);
        setRecords(res.data || []);
        if (res.data && res.data.length > 0) {
          const total = res.data.reduce((sum, r) => sum + (r.performance || 0), 0);
          setAverage((total / res.data.length).toFixed(2));
        }
      } catch (err) {
        console.log("Fetch failed:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPerformance();
  }, [candidateId]);

  if (loading) return <p className="text-white p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <Link to="/home" className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
        &larr; Back
      </Link>

      <h1 className="text-2xl font-bold my-4">Candidate Performance</h1>

      {records.length === 0 ? (
        <p className="text-gray-400">No activity added yet.</p>
      ) : (
        <>
          <p className="mb-4 text-gray-300">Average Performance: {average} / 10</p>
          <ul className="space-y-3 max-h-[500px] overflow-y-auto">
            {records.map((r, i) => (
              <li key={i} className="border border-gray-700 rounded-lg p-4 bg-neutral-900">
                <p className="text-gray-300">Date: {r.date}</p>
                <p className="text-gray-400">Performance: {r.performance} / 10</p>
                <p className="text-gray-400">Activity: {r.activity}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CandidatePerformance;