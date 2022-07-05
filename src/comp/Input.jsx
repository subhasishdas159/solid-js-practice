export default function Input() {
  return (
    <>
      <label
        class="relative block p-3 pt-4 border-b-2 rounded-t-xl bg-neutral-100 hover:bg-neutral-200 focus-within::bg-neutral-200 w-40 cursor-text"
        for="name"
      >
        <input
          class="w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer bg-inherit"
          id="name"
          type="text"
          placeholder="Name"
        />

        <span class="absolute text-xs font-medium text-gray-500 transition-all left-3 top-3 peer-focus:text-xs peer-focus:top-2 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
          Name
        </span>
      </label>
    </>
  );
}
