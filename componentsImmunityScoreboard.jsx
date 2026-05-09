const cities = [
{ city: 'Bengaluru', score: 89 },
{ city: 'Chennai', score: 74 },
{ city: 'Mumbai', score: 67 },
];
export default function ImmunityScoreboard() {
return (
<div className="bg-[#111827] p-6 rounded-2xl">
<h2 className="text-2xl font-bold mb-5">Community Immunity Ranking</h2>
{cities.map((c, i) => (
<div key={i} className="flex justify-between p-3 bg-gray-800 rounded
mb-3">
<span>{c.city}</span>
<span>{c.score}</span>
</div>
))}
</div>
);
}
