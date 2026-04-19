import { Nunito } from "next/font/google";
import { useState } from "react";
import { FaUsers, FaFilePdf, FaBullhorn, FaMousePointer, FaChartLine } from "react-icons/fa";
import Link from "next/link";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function Admin() {
  const [announcements, setAnnouncements] = useState([
    "School opens 6 January 2026",
    "Parent meeting next week",
  ]);
  const [newAnnouncement, setNewAnnouncement] = useState("");

  return (
    <div className={`${nunito.className} min-h-screen bg-gray-100 text-gray-900 p-6 mt-24`}>

      {/* STYLE */}
      <style jsx>{`
        .glass {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(14px);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .card {
          background: linear-gradient(135deg, rgba(34,197,94,0.15), rgba(250,204,21,0.15));
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 18px;
          padding: 1rem;
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .btn {
          background: linear-gradient(135deg,#22c55e,#facc15);
          padding: 10px 16px;
          border-radius: 12px;
          font-weight: 800;
          color: black;
          transition: 0.3s;
        }

        .btn:hover {
          transform: scale(1.05);
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 10px;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        th {
          background: rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
        }
      `}</style>

      {/* TITLE */}
      <h1 className="mt-20 text-5xl font-extrabold text-center mb-10 text-green-600">
        iLEARN ADMIN CENTRE
      </h1>

      {/* METRICS (NOW CLICKABLE) */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <Link href="/Applications">
          <div className="card cursor-pointer">
            <FaUsers className="text-3xl mb-2 text-green-500" />
            <h3 className="text-xl font-bold">Applications</h3>
            <p>128</p>
          </div>
        </Link>

        <Link href="/Uploads">
          <div className="card cursor-pointer">
            <FaFilePdf className="text-3xl mb-2 text-yellow-500" />
            <h3 className="text-xl font-bold">PDF Uploads</h3>
            <p>42 Files</p>
          </div>
        </Link>

        <Link href="/Analytics">
          <div className="card cursor-pointer">
            <FaMousePointer className="text-3xl mb-2 text-orange-500" />
            <h3 className="text-xl font-bold">Button Clicks</h3>
            <p>2,450</p>
          </div>
        </Link>

        <Link href="/Dashboard">
          <div className="card cursor-pointer">
            <FaChartLine className="text-3xl mb-2 text-pink-500" />
            <h3 className="text-xl font-bold">Daily Activity</h3>
            <p>High</p>
          </div>
        </Link>

      </div>

      {/* ANNOUNCEMENTS */}
    {/* ANNOUNCEMENTS */}
<div className="glass mb-8">
  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
    <FaBullhorn /> Announcements
  </h2>

  {/* LIST */}
  <ul className="space-y-2 mb-4">
    {announcements.map((a, i) => (
      <li key={i} className="p-2 bg-white rounded-lg shadow-sm">
        {a}
      </li>
    ))}
  </ul>

  {/* ADD ANNOUNCEMENT INPUT */}
  <div className="flex flex-col md:flex-row gap-3">
    <input
      type="text"
      placeholder="Write new announcement..."
      className="flex-1 p-3 rounded-lg border border-gray-300"
      value={newAnnouncement}
      onChange={(e) => setNewAnnouncement(e.target.value)}
    />

    <button
      className="btn"
      onClick={() => {
        if (!newAnnouncement.trim()) return;
        setAnnouncements([newAnnouncement, ...announcements]);
        setNewAnnouncement("");
      }}
    >
      + Add Announcement
    </button>
  </div>
</div>

      {/* APPLICATIONS TABLE */}
      <div className="glass mb-8">
        <h2 className="text-2xl font-bold mb-4">Student Applications (PDFs)</h2>

        <div className="overflow-auto max-h-96">
          <table>
            <thead>
              <tr>
                <th>Parent Name</th>
                <th>Child</th>
                <th>Date</th>
                <th>PDF</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>S. Matlala</td>
                <td>Junior</td>
                <td>2026-04-01</td>
                <td>
                  <Link href="/Applications">
                    <button className="btn">View</button>
                  </Link>
                </td>
              </tr>

              <tr>
                <td>T. Dube</td>
                <td>Mary</td>
                <td>2026-03-22</td>
                <td>
                  <Link href="/Applications">
                    <button className="btn">View</button>
                  </Link>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>

      {/* CLICK ANALYTICS */}
      <div className="glass">
        <h2 className="text-2xl font-bold mb-4">Click Analytics</h2>

        <div className="grid md:grid-cols-3 gap-4">

          <div className="bg-white p-4 rounded-xl shadow-sm">
            Apply Button → 1,240 clicks
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            Year Plan PDF → 860 clicks
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            Meal Plan PDF → 540 clicks
          </div>

        </div>
      </div>

      {/* FOOTNOTE */}
      <p className="text-center mt-10 text-gray-500">
        Backend integration (Firebase / Google Sheets / Supabase) will be connected here later.
      </p>

    </div>
  );
}
