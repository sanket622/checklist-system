module.exports = [
    {
      name: "Valuation Fee Paid",
      description: "Check if the valuation fee has been paid.",
      evaluate: (data) => data.isValuationFeePaid === true,
    },
    {
      name: "UK Resident",
      description: "Check if the applicant is a UK resident.",
      evaluate: (data) => data.isUkResident === true,
    },
    {
      name: "Risk Rating Medium",
      description: "Check if the risk rating is Medium.",
      evaluate: (data) => data.riskRating === "Medium",
    },
    {
      name: "LTV Below 60%",
      description:
        "Check if the Loan-to-Value (LTV) ratio is below 60%.",
      evaluate: (data) => {
        const ltv = (data.loanRequired / data.purchasePrice) * 100;
        return ltv < 60;
      },
    },
  ];
  