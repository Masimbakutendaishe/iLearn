import { Nunito } from "next/font/google";
import { useState } from "react";
import { FaFilePdf, FaSearch, FaUser, FaCalendar } from "react-icons/fa";
import Link from "next/link";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function Applications() {
  const [search, setSearch] = useState("");

  // 🔥 PLACEHOLDER DATA (will come from Supabase later)
  const [applications] = useState([
    {
      id: 1,
      parent: "Sphiwe Matlala",
      child: "Junior",
      date: "2026-04-01",
      pdf: "#"
    },
    {
      id: 2,
      parent: "Thando Dube",
      child: "Mary",
      date: "2026-03-22",
      pdf: "#"
    },
    {
      id: 3,
      parent: "Michael Van De Merwe",
      child: "Alex",
      date: "2026-03-18",
      pdf: "#"
    }
  ]);

  const filtered = applications.filter(app =>
    app.parent.toLowerCase().includes(search.toLowerCase()) ||
    app.child.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`${nunito.className} min-h-screen bg-gray-100 text-gray-900 p-6 mt-24`}>

      {/* STYLE */}
      <style jsx>{`
        .glass {
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(14px);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .card {
          background: white;
          border-radius: 14px;
          padding: 1rem;
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .btn {
          background: linear-gradient(135deg,#22c55e,#facc15);
          padding: 8px 14px;
          border-radius: 10px;
          font-weight: 800;
          color: black;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 12px;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        th {
          background: rgba(0,0,0,0.05);
        }
      `}</style>

      {/* TITLE */}
      <h1 className="mt-10 text-5xl font-extrabold text-center mb-8 text-green-600">
        Student Applications
      </h1>

      {/* SEARCH BAR */}
      <div className="glass mb-6 flex items-center gap-3">
        <FaSearch />
        <input
          type="text"
          placeholder="Search by parent or child name..."
          className="w-full p-3 rounded-lg border"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">

        <div className="card">
          <FaUser className="text-green-500 text-2xl mb-2" />
          <h3 className="font-bold text-lg">Total Applications</h3>
          <p className="text-xl font-extrabold">{applications.length}</p>
        </div>

        <div className="card">
          <FaCalendar className="text-orange-500 text-2xl mb-2" />
          <h3 className="font-bold text-lg">This Month</h3>
          <p className="text-xl font-extrabold">2</p>
        </div>

        <div className="card">
          <FaFilePdf className="text-yellow-500 text-2xl mb-2" />
          <h3 className="font-bold text-lg">PDF Files</h3>
          <p className="text-xl font-extrabold">{applications.length}</p>
        </div>

      </div>

      {/* TABLE */}
      <div className="glass overflow-auto">
        <table>

          <thead>
            <tr>
              <th>Parent Name</th>
              <th>Child</th>
              <th>Date Submitted</th>
              <th>Application PDF</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((app) => (
              <tr key={app.id} className="hover:bg-gray-100">

                <td>{app.parent}</td>
                <td>{app.child}</td>
                <td>{app.date}</td>

                <td>
                  <button className="btn">
                    View PDF
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* BACK BUTTON */}
      <div className="text-center mt-8">
        <Link href="/Admin">
          <button className="btn">
            Back to Admin
          </button>
        </Link>
      </div>

    </div>
  );
}
