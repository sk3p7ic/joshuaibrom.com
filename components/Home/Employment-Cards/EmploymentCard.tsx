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

const formatter = new Intl.DateTimeFormat("en-us");

export const EmploymentCard = ({ listing }: EmploymentCardProps) => {
  const toDate = (dateString: string): string =>
    formatter.format(new Date(dateString));
  return (
    <div className="p-4 flex flex-col gap-2 font-inter lg:text-lg bg-amber-100 dark:bg-stone-900 rounded-lg">
      <div className="pb-2 flex flex-col gap-2 border-b border-b-stone-800 dark:border-b-stone-100 transition-colors">
        <h1 className="font-nunito text-lg md:text-2xl xl:text-3xl">
          {listing.employer}
        </h1>
        <h2 className="font-raleway md:text-lg xl:text-2xl">{listing.title}</h2>
      </div>
      <div className="flex-grow flex flex-col gap-2">
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
      <span className="text-sm text-stone-500">
        {toDate(listing.start_date)} - {toDate(listing.end_date)}
      </span>
    </div>
  );
};
