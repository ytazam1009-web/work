export default function WasteCarrierBadge() {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-10 bg-white rounded-[40px] shadow-xl max-w-xl mx-auto border border-blue-100">
      {/* Environment Agency Badge */}
      <div className="w-full max-w-[380px] mb-6">
        <img
          src="/logos/waste-carrier-license.webp"
          alt="Environment Agency Registered Waste Carrier"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Registration Details */}
      <p className="text-sm text-[#071739] text-center font-medium leading-relaxed max-w-sm">
        GB Waste Removals is a{' '}
        <span className="text-[#CF142B] font-bold">
          Registered Waste Carrier
        </span>{' '}
        with the Environment Agency, authorised to carry waste under an Upper
        Tier registration.
      </p>

      <p className="text-sm text-[#071739] text-center font-semibold mt-3">
        Environment Agency Registration:{' '}
        <a
          href="https://environment.data.gov.uk/public-register/view/search-waste-carriers-brokers"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#CF142B] hover:text-[#0A1F44] underline transition-colors"
        >
          CBDU662042
        </a>
      </p>

      <p className="text-xs text-gray-500 text-center mt-2">
        Click the registration number to verify our waste carrier details on
        the official Environment Agency register.
      </p>
    </div>
  );
}