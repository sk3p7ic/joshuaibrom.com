type JobListing = {
  employer: string;
  title: string;
  start_date: string;
  end_date: string;
  responsibilities: (string | string[])[];
};

type EmploymentCardProps = {
  listing: JobListing;
};

export const EmploymentCard = ({ listing }: EmploymentCardProps) => {
  return (
    <div className="font-inter">
      <div>
        <h1 className="font-nunito">{listing.employer}</h1>
        <h2 className="font-raleway">{listing.title}</h2>
      </div>
      {listing.responsibilities.map((resp, i) =>
        typeof resp === "string" ? (
          <p key={i}>{resp}</p>
        ) : (
          <ul className="pl-6" key={i}>
            {resp.map((sub, idx) => (
              <li className="list-disc" key={idx}>
                {sub}
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};
