export default function Timing() {
  const schedule = [
    { day: "Monday", time: "10:00 AM – 8:00 PM" },
    { day: "Tuesday", time: "10:00 AM – 8:00 PM" },
    { day: "Wednesday", time: "10:00 AM – 8:00 PM" },
    { day: "Thursday", time: "10:00 AM – 8:00 PM" },
    { day: "Friday", time: "CLOSED" },
    { day: "Saturday", time: "10:00 AM – 8:00 PM" },
    { day: "Sunday", time: "10:00 AM – 8:00 PM" },
  ];

  return (
    <section id="schedule" className="py-16 px-6 md:px-16 bg-[#fff] font-inter">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#5c1a89] mb-10">
          Weekly Schedule
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse rounded-xl overflow-hidden shadow-md">
            <thead>
              <tr className="bg-[#fe6c1d] text-white text-left">
                <th className="py-3 px-6 font-semibold text-sm sm:text-base">Day</th>
                <th className="py-3 px-6 font-semibold text-sm sm:text-base">Timing</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b last:border-b-0 ${
                    item.time === "CLOSED"
                      ? "bg-[#fef0f4] text-[#f21c8b] font-medium"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <td className="py-3 px-6">{item.day}</td>
                  <td className="py-3 px-6">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
