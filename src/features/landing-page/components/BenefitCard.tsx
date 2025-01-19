interface IBenefitCard {
    label?: string;
    content?: string;
}

export const BenefitCard = ({label, content} : IBenefitCard) => {
  return (
    <div className="p-6 bg-green-100 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">{label}</h3>
      <p className="text-gray-600">
        {content}
      </p>
    </div>
  );
};
