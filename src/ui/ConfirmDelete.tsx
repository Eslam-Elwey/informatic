type ConfirmDeleteProps = {
  resourceName: string;
  onConfirm: () => void;
  disabled?: boolean;
  onCloseModal?: () => void;
};

export default function ConfirmDelete({
  resourceName,
  onConfirm,
  disabled = false,
  onCloseModal,
}: ConfirmDeleteProps) {
  return (
    <div
      className="
        flex
        w-full
        max-w-xl
        flex-col
        gap-5
      "
    >
      {/* Heading */}
      <div>
        <h3
          className="
            text-2xl
            font-bold
            text-text-heading
          "
        >
          Delete {resourceName}
        </h3>

        <p
          className="
            mt-3
            leading-relaxed
            text-text-muted
          "
        >
          Are you sure you want to delete this{" "}
          <span className="font-medium text-text-body">
            {resourceName}
          </span>{" "}
          permanently? This action cannot be undone.
        </p>
      </div>

      {/* Actions */}
      <div
        className="
          flex
          items-center
          justify-end
          gap-3
          pt-2
        "
      >
        <button
          onClick={onCloseModal}
          disabled={disabled}
          className="
            rounded-xl
            border
            border-border-subtle
            bg-bg-surface
            px-5
            py-2.5
            font-medium
            text-text-body
            shadow-sm
            transition-all
            duration-200
            hover:bg-neutral-100
            disabled:cursor-not-allowed
            disabled:opacity-50
            dark:hover:bg-neutral-800
          "
        >
          Cancel
        </button>

        <button
          onClick={onConfirm}
          disabled={disabled}
          className="
            rounded-xl
            bg-error
            px-5
            py-2.5
            font-medium
            text-white
            shadow-sm
            transition-all
            duration-200
            hover:bg-red-700
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Delete
        </button>
      </div>
    </div>
  );
}