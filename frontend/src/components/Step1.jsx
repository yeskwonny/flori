import CustomButton from "./Button";

function Step1({ formData, setFormData, next }) {
  return (
    <div className="w-[90%]">
      <div className="mb-3 flex flex-row gap-3">
        <label className="block text-lg font-semibold mb-1">
          🌱 When are you planting your seed?
        </label>
        <input
          type="date"
          value={formData.plantingDate}
          onChange={(e) =>
            setFormData({ ...formData, plantingDate: e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label className="block text-lg font-semibold mb-1">
          🌱 What worry would you like to plant today?
        </label>
        <p className="text-gray-500 text-sm mb-2 px-3">
          What thought is sitting quietly in your mind? Feel free to write it
          down.
        </p>
        <textarea
          className="w-full p-2 border rounded-md h-48"
          value={formData.worry}
          onChange={(e) => setFormData({ ...formData, worry: e.target.value })}
        />
      </div>
      <CustomButton title="Next" style="w-[40%]" onClick={next} />
    </div>
  );
}

export default Step1;
