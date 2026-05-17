"use client";

import { Nunito } from "next/font/google";
import { useState, useEffect } from "react";
import {
  FaUsers,
  FaFilePdf,
  FaBullhorn,
  FaMousePointer,
  FaChartLine,
  FaEye,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

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
  const [applications, setApplications] = useState([]);
  const [loadingApplications, setLoadingApplications] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoadingApplications(true);

      const { data, error } = await supabase
        .from("applications")
        .select("*")
        .order("submitted_at", { ascending: false });

      if (error) return console.error(error);

      setApplications(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingApplications(false);
    }
  };

  const updateApplicationStatus = async (id, accepted, reason) => {
    const { error } = await supabase
      .from("applications")
      .update({ accepted, rejection_reason: reason })
      .eq("id", id);

    if (error) return console.error(error);

    fetchApplications();
  };

  return (
    <div className={`${nunito.className} min-h-screen relative overflow-hidden text-gray-900 p-6 mt-24`}>

      {/* 🌈 Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="blob1"></div>
        <div className="blob2"></div>
        <div className="blob3"></div>
      </div>

      {/* STYLE */}
      <style jsx>{`
        .glass {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .glass:hover {
          transform: translateY(-4px);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
        }

        .card {
          background: linear-gradient(145deg, rgba(255,255,255,0.7), rgba(255,255,255,0.3));
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 1.2rem;
          border: 1px solid rgba(255,255,255,0.4);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          transform-style: preserve-3d;
        }

        .card:hover {
          transform: perspective(1000px) rotateX(6deg) rotateY(-6deg) scale(1.05);
          box-shadow: 0 25px 60px rgba(0,0,0,0.2);
        }

        .btn {
          background: linear-gradient(135deg, #22c55e, #facc15);
          padding: 10px 16px;
          border-radius: 14px;
          font-weight: 800;
          color: black;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }

        .btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 15px 30px rgba(0,0,0,0.25);
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 12px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        th {
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
        }

        /* 🌊 Background blobs */
        .blob1, .blob2, .blob3 {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.6;
          animation: float 12s infinite ease-in-out;
        }

        .blob1 {
          background: #22c55e;
          top: 10%;
          left: 5%;
        }

        .blob2 {
          background: #facc15;
          top: 40%;
          right: 10%;
          animation-delay: 2s;
        }

        .blob3 {
          background: #60a5fa;
          bottom: 10%;
          left: 30%;
          animation-delay: 4s;
        }

        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
          100% { transform: translateY(0px) scale(1); }
        }
      `}</style>

      {/* TITLE */}
      <h1 className="mt-6 text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400 drop-shadow-lg">
        iLEARN ADMIN CENTRE
      </h1>

      {/* METRICS */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <Link href="/Applications">
          <div className="card">
            <FaUsers className="text-3xl mb-2 text-green-500" />
            <h3 className="text-xl font-bold">Applications</h3>
            <p>{applications.length}</p>
          </div>
        </Link>

        <Link href="/Uploads">
          <div className="card">
            <FaFilePdf className="text-3xl mb-2 text-yellow-500" />
            <h3 className="text-xl font-bold">PDF Uploads</h3>
            <p>42 Files</p>
          </div>
        </Link>

        <Link href="/Analytics">
          <div className="card">
            <FaMousePointer className="text-3xl mb-2 text-orange-500" />
            <h3 className="text-xl font-bold">Button Clicks</h3>
            <p>2,450</p>
          </div>
        </Link>

        <Link href="/Dashboard">
          <div className="card">
            <FaChartLine className="text-3xl mb-2 text-pink-500" />
            <h3 className="text-xl font-bold">Daily Activity</h3>
            <p>High</p>
          </div>
        </Link>

      </div>

      {/* ANNOUNCEMENTS */}
      <div className="glass p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FaBullhorn /> Announcements
        </h2>

        <ul className="space-y-2 mb-4">
          {announcements.map((a, i) => (
            <li key={i} className="p-3 rounded-xl bg-white/70 backdrop-blur shadow">
              {a}
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <input
            className="flex-1 p-3 rounded-xl border bg-white/60 backdrop-blur"
            placeholder="Write announcement..."
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
            Add
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="glass p-6">
        <h2 className="text-2xl font-bold mb-4">Student Applications</h2>

        <div className="overflow-auto max-h-[600px]">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Submitted</th>
                <th>Path</th>
                <th>PDF</th>
                <th>Status</th>
                <th>Reason</th>
                <th>Save</th>
              </tr>
            </thead>

            <tbody>
              {loadingApplications ? (
                <tr><td colSpan="7">Loading...</td></tr>
              ) : applications.length === 0 ? (
                <tr><td colSpan="7">No applications</td></tr>
              ) : (
                applications.map((app, i) => (
                  <ApplicationRow
                    key={app.id}
                    app={app}
                    index={i}
                    updateApplicationStatus={updateApplicationStatus}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

function ApplicationRow({ app, index, updateApplicationStatus }) {
  const [accepted, setAccepted] = useState(app.accepted || false);
  const [reason, setReason] = useState(app.rejection_reason || "");

  return (
    <tr className="hover:bg-white/40 transition">
      <td>{index + 1}</td>

      <td>{app.submitted_at ? new Date(app.submitted_at).toLocaleString() : "-"}</td>

      <td className="text-xs break-all">{app.storage_path}</td>

      <td>
        <a href={app.pdf_url} target="_blank">
          <button className="btn flex items-center gap-2">
            <FaEye /> View
          </button>
        </a>
      </td>

      <td>
        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />

          {accepted ? (
            <span className="text-green-600 flex items-center gap-1">
              <FaCheckCircle /> Accepted
            </span>
          ) : (
            <span className="text-red-500 flex items-center gap-1">
              <FaTimesCircle /> Declined
            </span>
          )}
        </label>
      </td>

      <td>
        <input
          className="p-2 rounded-lg border bg-white/60"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </td>

      <td>
        <button
          className="btn"
          onClick={() => updateApplicationStatus(app.id, accepted, reason)}
        >
          Save
        </button>
      </td>
    </tr>
  );
}
