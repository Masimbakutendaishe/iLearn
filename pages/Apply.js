import { useState } from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function Apply() {
  const [children, setChildren] = useState([{ id: Date.now() }]);
  const [contacts, setContacts] = useState([{ id: Date.now() + 1 }]);

  const addChild = () =>
    setChildren([...children, { id: Date.now() }]);

  const addContact = () =>
    setContacts([...contacts, { id: Date.now() }]);

  return (
    <div className={`${nunito.className} min-h-screen bg-black text-white p-6`}>

      <style jsx>{`
        .card {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 1.5rem;
        }
        input, select, textarea {
          width: 100%;
          padding: 10px;
          border-radius: 10px;
          border: none;
          margin: 5px 0 10px;
          color: black;
        }
        label {
          font-weight: 600;
          font-size: 0.9rem;
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .btn {
          background: linear-gradient(135deg,#22c55e,#facc15);
          padding: 10px 20px;
          border-radius: 10px;
          font-weight: bold;
          color: black;
        }
      `}</style>

      <form>
        <h1 className="text-4xl font-extrabold text-center mb-10">
          iLearn Academy Application Form 2026
        </h1>

        {/* PARENT */}
        <div className="card mb-6">
          <h2 className="section-title">Parent / Guardian</h2>

          <input placeholder="First Name" />
          <input placeholder="Surname" />
          <input placeholder="Email" />

          <select>
            <option>Married</option>
            <option>Single</option>
          </select>

          <input
            type="text"
            maxLength={4}
            pattern="\d{4}"
            placeholder="PIN (4 digits)"
          />

          <label>
            <input type="checkbox" /> Custodial Parent
          </label>
        </div>

        {/* CHILDREN */}
        <div className="card mb-6">
          <h2 className="section-title">Children</h2>

          {children.map((child) => (
            <div key={child.id}>
              <input placeholder="Child Name" />
              <input type="date" />
              <textarea placeholder="Medical Info" />
            </div>
          ))}

          <button type="button" onClick={addChild} className="btn">
            + Add Child
          </button>
        </div>

        {/* CONTACTS */}
        <div className="card mb-6">
          <h2 className="section-title">Emergency Contacts</h2>

          {contacts.map((c) => (
            <div key={c.id}>
              <input placeholder="Name" />
              <input placeholder="Phone" />
            </div>
          ))}

          <button type="button" onClick={addContact} className="btn">
            + Add Contact
          </button>
        </div>

        {/* SUBMIT */}
        <div className="text-center">
          <button type="submit" className="btn text-xl px-10 py-4">
            Submit Application
          </button>
        </div>
      </form>

    </div>
  );
}
