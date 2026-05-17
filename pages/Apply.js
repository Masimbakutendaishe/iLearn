"use client";

import { useState } from "react";
import { Nunito } from "next/font/google";
import { jsPDF } from "jspdf";
import { supabase } from "../lib/supabase";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function Apply() {

  const [loading, setLoading] = useState(false);

  const [children, setChildren] = useState([
    {},
  ]);

  const [contacts, setContacts] = useState([
    {},
  ]);

  const addChild = () =>
    setChildren([...children, {}]);

  const addContact = () =>
    setContacts([...contacts, {}]);

  const generatePDF = () => {

    const doc = new jsPDF();
  
    let y = 20;
  
    // ================= HEADER =================
  
    doc.setFillColor(22, 101, 52);
  
    doc.rect(0, 0, 220, 35, "F");
  
    doc.setTextColor(255, 255, 255);
  
    doc.setFontSize(22);
  
    doc.setFont(undefined, "bold");
  
    doc.text(
      "iLearn Academy Application Form 2026",
      20,
      22
    );
  
    doc.setFontSize(11);
  
    doc.text(
      "Official Student Application",
      20,
      30
    );
  
    doc.setTextColor(0, 0, 0);
  
    y = 50;
  
    // ================= HELPERS =================
  
    const checkPageBreak = () => {
  
      if (y > 260) {
  
        doc.addPage();
  
        y = 20;
      }
    };
  
    const addSection = (title) => {
  
      checkPageBreak();
  
      doc.setFillColor(230, 230, 230);
  
      doc.rect(14, y - 6, 182, 10, "F");
  
      doc.setFontSize(15);
  
      doc.setFont(undefined, "bold");
  
      doc.text(title, 20, y);
  
      y += 12;
    };
  
    const addField = (
      label,
      value
    ) => {
    
      checkPageBreak();
    
      doc.setFontSize(11);
    
      // LABEL
      doc.setFont(undefined, "bold");
    
      const splitLabel =
        doc.splitTextToSize(
          `${label}:`,
          60
        );
    
      doc.text(
        splitLabel,
        20,
        y
      );
    
      // VALUE
      doc.setFont(undefined, "normal");
    
      const splitValue =
        doc.splitTextToSize(
          value || "_____________________",
          90
        );
    
      doc.text(
        splitValue,
        90,
        y
      );
    
      // DYNAMIC HEIGHT
      const labelHeight =
        splitLabel.length * 6;
    
      const valueHeight =
        splitValue.length * 6;
    
      const rowHeight =
        Math.max(
          labelHeight,
          valueHeight
        );
    
      y += rowHeight + 4;
    };
  
    const addTableRow = (
      col1,
      col2
    ) => {
  
      checkPageBreak();
  
      doc.rect(20, y - 5, 110, 10);
  
      doc.rect(130, y - 5, 50, 10);
  
      doc.text(
        col1,
        24,
        y + 1
      );
  
      doc.text(
        col2,
        145,
        y + 1
      );
  
      y += 10;
    };
  
    // ================= GET VALUES =================
  
    const inputs =
      document.querySelectorAll(
        "input, textarea, select"
      );
  
    const values = [];
  
    inputs.forEach((input) => {
  
      if (
        input.type === "button" ||
        input.type === "submit"
      ) {
        return;
      }
  
      let label = "";
  
      if (
        input.previousElementSibling
      ) {
  
        label =
          input.previousElementSibling
            .textContent
            ?.trim();
      }
  
      // CHECKBOXES
      if (
        input.type === "checkbox"
      ) {
  
        values.push({
          label:
            label ||
            input.parentElement
              ?.textContent
              ?.trim(),
  
          value:
            input.checked
              ? "Yes"
              : "No",
        });
  
        return;
      }
  
      // RADIO BUTTONS
      if (
        input.type === "radio"
      ) {
  
        if (input.checked) {
  
          values.push({
            label:
              input.name,
            value: "Yes",
          });
        }
  
        return;
      }
  
      // NORMAL FIELDS
      values.push({
        label:
          label ||
          input.placeholder ||
          "Field",
  
        value:
          input.value,
      });
  
    });
  
    // ================= PARENT INFO =================
  
    addSection(
      "Parent / Guardian Information"
    );
  
    values
      .slice(0, 15)
      .forEach((item) => {
  
        addField(
          item.label,
          item.value
        );
  
      });
  
    // ================= CHILD INFO =================
  
    addSection(
      "Child Information"
    );
  
    values
      .slice(15, 25)
      .forEach((item) => {
  
        addField(
          item.label,
          item.value
        );
  
      });
  
    // ================= EMERGENCY =================
  
    addSection(
      "Emergency Contacts"
    );
  
    values
      .slice(25, 31)
      .forEach((item) => {
  
        addField(
          item.label,
          item.value
        );
  
      });
  
    // ================= CONSENT =================
  
    addSection(
      "Consent"
    );
  
    values
      .slice(31, 33)
      .forEach((item) => {
  
        addField(
          item.label,
          item.value
        );
  
      });
  
    // ================= EXTRA ACTIVITIES =================
  
    addSection(
      "Extra Activities"
    );
  
    values
      .slice(33, 38)
      .forEach((item) => {
  
        addField(
          item.label,
          item.value
        );
  
      });
  
    // ================= REGISTRATION CHECKLIST =================
  
    addSection(
      "Registration Checklist"
    );
  
    doc.setFont(undefined, "bold");
  
    addTableRow(
      "Requirement",
      "Status"
    );
  
    doc.setFont(undefined, "normal");
  
    const checklistItems = [
      "ID Copy",
      "Vaccination Card",
      "Birth Certificate",
      "Transfer Card",
      "Proof of Residence",
      "Registration Fee Paid",
      "School Fees Paid",
      "Uniform Purchased",
      "Excursions Consent"
    ];
  
    checklistItems.forEach(
      (item, index) => {
  
        const value =
          values[38 + index]
            ?.value || "No";
  
        addTableRow(
          item,
          value
        );
  
      }
    );
  
    // ================= SIGNATURE =================
  
    addSection(
      "Signature"
    );
  
    values
      .slice(47)
      .forEach((item) => {
  
        addField(
          item.label,
          item.value
        );
  
      });
  
    // ================= FOOTER =================
  
    y += 15;
  
    checkPageBreak();
  
    doc.setFontSize(10);
  
    doc.setTextColor(
      100,
      100,
      100
    );
  
    doc.text(
      "Thank you for applying to iLearn Academy.",
      20,
      y
    );
  
    y += 6;
  
    doc.text(
      `Generated on ${new Date().toLocaleString()}`,
      20,
      y
    );
  
    return doc.output("blob");
  };

  const handleSubmit = async () => {

    try {

      setLoading(true);

      // GENERATE PDF
      const pdfBlob =
        generatePDF();

      // DATE FOLDERS
      const now = new Date();

      const year =
        now.getFullYear();

      const month = String(
        now.getMonth() + 1
      ).padStart(2, "0");

      const day = String(
        now.getDate()
      ).padStart(2, "0");

      // FILE NAME
      const fileName =
        `application-${Date.now()}.pdf`;

      // STORAGE PATH
      const filePath =
        `${year}/${month}/${day}/${fileName}`;

      // UPLOAD TO SUPABASE STORAGE
      const {
        error: uploadError,
      } =
        await supabase.storage
          .from("applications")
          .upload(
            filePath,
            pdfBlob,
            {
              contentType:
                "application/pdf",
            }
          );

      if (uploadError) {
        throw uploadError;
      }

      // GET PUBLIC URL
      const {
        data: publicUrlData,
      } = supabase.storage
        .from("applications")
        .getPublicUrl(
          filePath
        );

      const pdfUrl =
        publicUrlData.publicUrl;

      // SAVE TO DATABASE
      const {
        error: dbError,
      } = await supabase
        .from("applications")
        .insert([
          {
            pdf_url: pdfUrl,
            storage_path:
              filePath,
            submitted_at:
              new Date(),
          },
        ]);

      if (dbError) {
        throw dbError;
      }

      alert(
        "Application submitted successfully!"
      );

    } catch (error) {

      console.error(error);

      alert(
        "Something went wrong"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className={`${nunito.className} mt-40 min-h-screen bg-green-900 text-white p-6`}>

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
            <label>Employed By</label>
            <input type="text" />
          </div>

          <div>
            <label>Work Address</label>
            <input type="text" />
          </div>

          <div>
            <label>Work Hours</label>
            <input type="text" />
          </div>

          <div>
            <label>Home Phone</label>
            <input type="tel" />
          </div>

          <div>
            <label>Office Phone</label>
            <input type="tel" />
          </div>

          <div>
            <label>Cell Phone</label>
            <input type="tel" />
          </div>

          <div>
            <label>ID Number</label>
            <input type="text" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" />
          </div>

          <div>
            <label>Preferred PIN (1st Choice)</label>
            <input type="number" />
          </div>

          <div>
            <label>Preferred PIN (2nd Choice)</label>
            <input type="number" />
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

          <div className="col-span-2">
            <label>
              <input type="checkbox" /> Custodial Parent
            </label>
          </div>

        </div>
      </div>

      {/* ================= CHILDREN ================= */}

      <div className="card mb-6">

        <h2 className="section-title">
          Child Information
        </h2>

        {children.map((_, i) => (
          <div
            key={i}
            className="mb-6 border-b border-white/20 pb-4"
          >

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

        <button
          onClick={addChild}
          className="btn"
        >
          + Add Another Child
        </button>

      </div>

      {/* ================= EMERGENCY ================= */}

      <div className="card mb-6">

        <h2 className="section-title">
          Emergency Contacts
        </h2>

        {contacts.map((_, i) => (
          <div
            key={i}
            className="grid md:grid-cols-2 gap-4 mb-4"
          >

            <input placeholder="Name" />
            <input placeholder="Phone" />
            <input placeholder="Relationship" />
            <input placeholder="PIN (4 digits)" />

            <div className="col-span-2">
              <input type="checkbox" /> Can pick up all children
            </div>

          </div>
        ))}

        <button
          onClick={addContact}
          className="btn"
        >
          + Add Contact
        </button>

        <textarea placeholder="Who is NOT allowed to pick up child"></textarea>

      </div>

      {/* ================= CONSENT ================= */}

      <div className="card mb-6">

        <h2 className="section-title">
          Consent
        </h2>

        <label>
          <input type="checkbox" /> POPI Act Consent (Photos & Videos)
        </label>

        <label>
          <input type="checkbox" /> First Aid & Medication Consent
        </label>

      </div>

      {/* ================= EXTRAS ================= */}

      <div className="card mb-6">

        <h2 className="section-title">
          Extra Activities
        </h2>

        <label><input type="checkbox" /> Swimming – R300 pm</label><br/>
        <label><input type="checkbox" /> Sports & Athletics – R250 pm</label><br/>
        <label><input type="checkbox" /> Eisteddfod – Free</label><br/>
        <label><input type="checkbox" /> Excursions & Fun Events (cost applies)</label><br/>
        <label><input type="checkbox" /> More activities coming soon</label><br/>

      </div>

      {/* ================= CHECKLIST ================= */}

      <div className="card mb-6">

        <h2 className="section-title">
          Registration Checklist
        </h2>

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
              "Transfer Card (if from another school)",
              "Proof of Residence",
              "Registration Fee Paid",
              "School Fees Paid",
              "Uniform & Stationery Purchased",
              "Excursions & Events Consent"
            ].map((item, i) => (

              <tr key={i}>
                <td>{item}</td>
                <td>
                  <input
                    type="radio"
                    name={item}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name={item}
                  />
                </td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* ================= SIGNATURE ================= */}

      <div className="card mb-6">

        <h2 className="section-title">
          Signature
        </h2>

        <input placeholder="Parent Signature (type name)" />

        <input type="date" />

        <input placeholder="Witness Signature" />

        <input type="date" />

      </div>

      {/* ================= SUBMIT ================= */}

      <div className="text-center">

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn text-xl px-10 py-4"
        >
          {loading
            ? "Submitting..."
            : "Submit Application"}
        </button>

      </div>

      <p className="text-center mt-6 text-yellow-300 font-bold">
        😊 WELCOME TO OUR SCHOOL, WE LOOK FORWARD TO A JOURNEY WITH YOU! 😊
      </p>

    </div>
  );
}
