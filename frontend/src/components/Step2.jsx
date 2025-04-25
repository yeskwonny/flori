import CustomButton from "./Button";
import { useJournalStore } from "../store/useJournalStore";

function Step2({ formData, setFormData, back }) {
  const { journal, isCreatingJournal, isJournalLoading, postJournal } =
    useJournalStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await postJournal(formData);
    console.log(success);
  };

  //! todo validation
  // ! after submit

  console.log(formData);
  return (
    <div className="w-[90%] overflow-y-auto mt-5 py-10">
      <div className="mb-3">
        <label className="block text-lg font-semibold mb-1">
          🌱 Where did this worry begin?
        </label>
        <p className="text-gray-500 text-sm mb-2 px-3">
          Reflect on the root of this feeling — fear, doubt, expectations, or
          something else.
        </p>
        <textarea
          className="w-full p-2 border rounded-md h-48"
          value={formData.root}
          onChange={(e) => setFormData({ ...formData, root: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="block text-lg font-semibold mb-1">
          🌱 What do you think will happen?
        </label>
        <p className="text-gray-500 text-sm mb-2 px-3">
          Take a moment to imagine the outcome. Will it really happen, or will
          it pass quietly?
        </p>
        <textarea
          className="w-full p-2 border rounded-md h-48"
          value={formData.prediction}
          onChange={(e) =>
            setFormData({
              ...formData,
              prediction: e.target.value,
            })
          }
        />
      </div>
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-1">
          🌱 Did the seed bloom or fade away?
        </label>
        <p className="text-gray-500 text-sm mb-2 px-3">
          After some time, come back and see if the worry blossomed into reality
          or simply faded like passing clouds.
        </p>
        <textarea
          className="w-full p-2 border rounded-md h-48"
          value={formData.reality}
          onChange={(e) =>
            setFormData({ ...formData, reality: e.target.value })
          }
        />
      </div>
      <div>
        <CustomButton title="Back" style="w-[40%]" onClick={back} />
        <CustomButton title="Submit" style="w-[40%]" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default Step2;
