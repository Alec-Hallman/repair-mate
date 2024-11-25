import "../../Styles/Claims.css";

const SmallClaim = ({ claim }) => {
  console.log(claim);
  return (
    <>
      <div className="claim-container">
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
