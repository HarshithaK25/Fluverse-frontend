export default function HospitalTracker() {
const hospitals = [
{
name: "City Hospital",
beds: 120,
icu: 20,
},
{
name: "Care Hospital",
beds: 85,
icu: 12,
},
];
return (
<div className="bg-[#111827] p-6 rounded-2xl">
<h2 className="text-2xl font-bold mb-5">Hospital Resource Shield</h2>
{hospitals.map((h, i) => (
<div key={i} className="mb-4 p-4 bg-gray-800 rounded">
<h3 className="text-xl">{h.name}</h3>
<p>Beds Available: {h.beds}</p>
<p>ICU Capacity: {h.icu}</p>
</div>
))}
</div>
);
}
s