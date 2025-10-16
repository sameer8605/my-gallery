export default function Biodata() {
  return (
   <section id="biodata" className="container py-5">
  <h2 className="text-center mb-4 fw-bold">Biodata</h2>

  {/* Personal Details */}
  <div className=" shadow-sm mb-4">
    <div className="bg-dark text-white fw-semibold p-2">Personal Details</div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-borderless align-middle mb-0">
          <tbody>
            <tr>
              <th className="fw-semibold" style={{ width: "40%" }}>Name:</th>
              <td>Mohd Sameer</td>
            </tr>
            <tr>
              <th className="fw-semibold">Date of Birth:</th>
              <td>15 Jun 1997</td>
            </tr>
             <tr>
              <th className="fw-semibold">Height:</th>
              <td>5.5 INCH</td>
            </tr>
             <tr>
              <th className="fw-semibold">Education:</th>
              <td>BCA</td>
            </tr>
             <tr>
              <th className="fw-semibold">Profession:</th>
              <td>Software Developer</td>
            </tr>
            <tr>
              <th className="fw-semibold">Religion:</th>
              <td>Islam</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  {/* Family Details */}
  <div className=" shadow-sm mb-4">
    <div className="bg-dark text-white fw-semibold p-2">Family Details</div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-borderless align-middle mb-0">
          <tbody>
            <tr>
              <th className="fw-semibold" style={{ width: "45%" }}>Father’s Name:</th>
              <td>Mohd Zaheer</td>
            </tr>
             <tr>
              <th className="fw-semibold" style={{ width: "45%" }}>Father’s Occ:</th>
              <td>Broker</td>
            </tr>
            <tr>
              <th className="fw-semibold">Mother’s Name:</th>
              <td>Zaibun Nisa</td>
            </tr>
             <tr>
              <th className="fw-semibold" style={{ width: "45%" }}>Mother’s Occ:</th>
              <td>House Wife</td>
            </tr>
            <tr>
              <th className="fw-semibold">Siblings:</th>
              <td>3 Sister</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  {/* Contact / Address Details */}
  <div className="shadow-sm">
    <div className="bg-dark text-white fw-semibold p-2">Contact / Address Details</div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-borderless align-middle mb-0">
          <tbody>
            <tr>
              <th className="fw-semibold" style={{ width: "40%" }}>Address:</th>
              <td>Chaman Shahwali camp Amravati</td>
            </tr>
            <tr>
              <th className="fw-semibold">Phone:</th>
              <td>+91 8605110910</td>
            </tr>
            <tr>
              <th className="fw-semibold">Email:</th>
              <td>sameer8605110910@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>


  );
}
