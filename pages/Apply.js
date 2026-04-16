import { useState } from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function Apply() {
  const [children, setChildren] = useState([{}]);
  const [contacts, setContacts] = useState([{}]);

  const addChild = () => setChildren([...children, {}]);
  const addContact = () => setContacts([...contacts, {}]);

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
          margin-top: 5px;
          margin-bottom: 10px;
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

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding: 8px;
        }
      `}</style>

      <h1 className="text-4xl font-extrabold text-center mb-10">
        iLearn Academy Application Form 2026
      </h1>

      {/* ================= PARENT INFO ================= */}
      <div className="card mb-6">
        <h2 className="section-title">Parent / Guardian Information</h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <label>First Name</label>
            <input type="text" />
          </div>

          <div>
            <label>Surname</label>
            <input type="text" />
          </div>

          <div>
            <label>Address</label>
            <input type="text" />
          </div>

          <div>
            <label>Occupation</label>
            <input type="text" />
          </div>

          <div>
            <label>Phone</label>
            <input type="tel" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" />
          </div>

          <div>
            <label>Marital Status</label>
            <select>
              <option>Married</option>
              <option>Single</option>
              <option>Divorced</option>
              <option>Separated</option>
              <option>Widowed</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label>Preferred PIN (4 digits)</label>
            <input type="number" maxLength="4" />
          </div>

          <div className="col-span-2">
            <label>Custodial Parent</label><br/>
            <input type="checkbox" /> Yes
          </div>

        </div>
      </div>

      {/* ================= CHILDREN ================= */}
      <div className="card mb-6">
        <h2 className="section-title">Child Information</h2>

        {children.map((_, i) => (
          <div key={i} className="mb-6 border-b border-white/20 pb-4">

            <div className="grid md:grid-cols-2 gap-4">

              <input placeholder="First Name" />
              <input placeholder="Surname" />
              <input placeholder="Preferred Name" />
              <input placeholder="Grade / Class" />

              <input type="date" />
              <input placeholder="Child ID" />

              <select>
                <option>Male</option>
                <option>Female</option>
              </select>

              <input placeholder="Address" />

            </div>

            <textarea placeholder="Medical conditions / dietary needs"></textarea>

          </div>
        ))}

        <button onClick={addChild} className="btn">
          + Add Another Child
        </button>
      </div>

      {/* ================= EMERGENCY ================= */}
      <div className="card mb-6">
        <h2 className="section-title">Emergency Contacts</h2>

        {contacts.map((_, i) => (
          <div key={i} className="grid md:grid-cols-2 gap-4 mb-4">

            <input placeholder="Name" />
            <input placeholder="Phone" />
            <input placeholder="Relationship" />
            <input placeholder="PIN (4 digits)" />

            <div className="col-span-2">
              <input type="checkbox" /> Can pick up all children
            </div>

          </div>
        ))}

        <button onClick={addContact} className="btn">
          + Add Contact
        </button>

        <textarea placeholder="Who is NOT allowed to pick up child"></textarea>
      </div>

      {/* ================= CONSENT ================= */}
      <div className="card mb-6">
        <h2 className="section-title">Consent</h2>

        <label>
          <input type="checkbox" /> POPI Act Consent (Photos & Videos)
        </label>

        <label>
          <input type="checkbox" /> First Aid & Medication Consent
        </label>

      </div>

      {/* ================= EXTRAS ================= */}
      <div className="card mb-6">
        <h2 className="section-title">Extra Activities</h2>

        <label><input type="checkbox" /> Swimming – R300 pm</label><br/>
        <label><input type="checkbox" /> Sports & Athletics – R250 pm</label><br/>
        <label><input type="checkbox" /> Eisteddfod – Free</label><br/>

      </div>

      {/* ================= CHECKLIST ================= */}
      <div className="card mb-6">
        <h2 className="section-title">Registration Checklist</h2>

        <table>
          <thead>
            <tr>
              <th>Requirement</th>
              <th>Yes</th>
              <th>No</th>
            </tr>
          </thead>
          <tbody>
            {[
              "ID Copy",
              "Vaccination Card",
              "Birth Certificate",
              "Proof of Residence",
              "Registration Fee Paid",
              "School Fees Paid"
            ].map((item, i) => (
              <tr key={i}>
                <td>{item}</td>
                <td><input type="radio" name={item} /></td>
                <td><input type="radio" name={item} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= SIGNATURE ================= */}
      <div className="card mb-6">
        <h2 className="section-title">Signature</h2>

        <input placeholder="Parent Signature (type name)" />
        <input type="date" />

        <input placeholder="Witness Signature" />
        <input type="date" />
      </div>

      {/* ================= SUBMIT ================= */}
      <div className="text-center">
        <button className="btn text-xl px-10 py-4">
          Submit Application
        </button>
      </div>

      <p className="text-center mt-6 text-yellow-300 font-bold">
        😊 WELCOME TO OUR SCHOOL, WE LOOK FORWARD TO A JOURNEY WITH YOU! 😊
      </p>

    </div>
  );
}