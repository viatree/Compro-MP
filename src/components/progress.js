export default function StepsFlow() {
  const steps = [
    {
      title: "Sign up & load funds",
      desc: "Verify your company and load funds to your Spendesk wallet from your existing bank account."
    },
    {
      title: "Set your spending rules",
      desc: "Define teams, approval workflows, spending policies, and card limits that work for you."
    },
    {
      title: "Invite your team",
      desc: "Employees can request funds, pay securely, and submit receipts in a snap with the Spendesk app."
    },
    {
      title: "Manage spending",
      desc: "Track and control every expense in real-time with automated reports and analytics."
    },
    {
      title: "Get insights",
      desc: "Use insights to make smarter financial decisions and improve your budget strategy."
    }
  ];

  return (
    <section className="bg-[#3b0b75] text-white py-16 px-4 md:px-16">
      <h2 className="text-center text-3xl font-bold mb-12">Three steps to smarter spending</h2>
      
      <div className="relative flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`w-full md:w-[30%] text-center relative px-4`}
            style={{
              marginTop: index >= 3 ? '80px' : '0px'
            }}
          >
            <div className="mx-auto w-14 h-14 flex items-center justify-center text-2xl font-bold bg-white text-[#3b0b75] rounded-full border-4 border-white mb-4">
              {index + 1}
            </div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-white/80 text-sm">{step.desc}</p>

            {/* Panah putus-putus */}
            {index < 2 && (
              <div className="absolute right-[-60px] top-6 hidden md:block">
                <svg width="120" height="60">
                  <path
                    d="M0,30 Q60,-20 120,30"
                    stroke="white"
                    strokeDasharray="6,6"
                    fill="transparent"
                    markerEnd="url(#arrowhead)"
                  />
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                    </marker>
                  </defs>
                </svg>
              </div>
            )}

           
            {/* Panah ke kanan dari step 4 */}
            {index === 3 && (
              <div className="absolute right-[-60px] top-6 hidden md:block">
                <svg width="120" height="60">
                  <path
                    d="M0,30 Q60,-20 120,30"
                    stroke="white"
                    strokeDasharray="6,6"
                    fill="transparent"
                    markerEnd="url(#arrowhead)"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}