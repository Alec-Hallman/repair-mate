import "../../Styles/Claims.css";

const SmallClaim = ({ claim }) => {
  function backgroundColours() {
    if (claim.status === "Unopened") {
      return "#F17171";
    } else if (claim.status === "Under Review") {
      return "#F19871";
    } else if (claim.status === "Worker assigned") {
      return "#F1C571";
    } else {
      return "#6EBE66";
    }
  }
  console.log(claim);
  return (
    <>
      <div
        className="claim-container"
        style={{ backgroundColor: backgroundColours() }}
      >
        <div className="top-row">
          <p className="normalText">{claim.problem}</p>
          <p className="description-text">
            |{" "}
            {claim.location === "In unit"
              ? "Unit " + claim.unitNumber
              : claim.location}{" "}
            |
          </p>
          <p className="description-text">Submitted by: {claim.forename} |</p>
        </div>
        <p className="description-text">{claim.description}</p>
      </div>
    </>
  );
};
export default SmallClaim;
