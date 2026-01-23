import { SponsorsList } from "../../data/sponsorsList";

const groupRanges = [
  { start: 1, end: 3 },
  { start: 4, end: 6 },
  { start: 7, end: 9 },
];

export const SponsorsGroup = ({
  groupIndex,
  active,
}: {
  groupIndex: number;
  active: boolean;
}) => {
  if (groupIndex < 0 || groupIndex >= groupRanges.length) {
    return null; // or some fallback UI
  }

  const { start, end } = groupRanges[groupIndex];
  return (
    <div className="sponsor-wrapper">
      {SponsorsList.filter((s) => s.id >= start && s.id <= end).map(
        (sponsor) => (
          <img
            key={sponsor.id}
            src={sponsor.img}
            alt={sponsor.alt}
            style={{ opacity: active ? 1 : 0.4, transition: "opacity 0.5s" }}
          />
        ),
      )}
    </div>
  );
};
