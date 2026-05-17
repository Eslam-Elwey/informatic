import { ArrowLeft, Building2, Mail, MapPin, Phone, Globe } from "lucide-react";
import { useMoveBack } from "../../hooks/useMoveBack";

import Spinner from "../../ui/Spinner";
import { useUser } from "./useUser";

export default function UserInfo() {
  const moveBack = useMoveBack();
  const { isPending, error, user } = useUser();

  if (isPending) return <Spinner />;

  if (error)
    return <p className="text-error text-xl text-center p-4">{error.message}</p>;

  if (!user) return null;

  return (
    <section className="flex flex-col justify-center items-center  ">
      <h2 className="text-center mb-3 text-3xl p-6">User Info</h2>
      <div
        className="
          mx-auto
          max-w-3xl
          overflow-hidden
          rounded-2xl
          border
          border-border-subtle
          bg-bg-surface
          shadow-lg
        "
      >
        {/* Header */}
        <div
          className="
            bg-linear-to-r
            from-brand/10
            to-accent/10
            px-8
            py-10
          "
        >
          <div className="flex items-center gap-5">
            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-brand
                text-3xl
                font-bold
                text-white
              "
            >
              {user.name.charAt(0)}
            </div>

            <div>
              <h1 className="text-3xl font-bold text-text-heading">
                {user.name}
              </h1>

              <p className="mt-1 text-lg text-text-muted">@{user.username}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="grid gap-6 p-8 md:grid-cols-2">
          <div
            className="
              rounded-xl
              bg-bg-elevated
              p-5
              shadow-sm
            "
          >
            <div className="mb-4 flex items-center gap-3">
              <Mail className="h-5 w-5 text-brand" />
              <h3 className="font-semibold text-text-heading">Email</h3>
            </div>

            <p className="text-text-body">{user.email}</p>
          </div>

          <div
            className="
              rounded-xl
              bg-bg-elevated
              p-5
              shadow-sm
            "
          >
            <div className="mb-4 flex items-center gap-3">
              <Phone className="h-5 w-5 text-brand" />
              <h3 className="font-semibold text-text-heading">Phone</h3>
            </div>

            <p className="text-text-body">{user.phone}</p>
          </div>

          <div
            className="
              rounded-xl
              bg-bg-elevated
              p-5
              shadow-sm
            "
          >
            <div className="mb-4 flex items-center gap-3">
              <Globe className="h-5 w-5 text-brand" />
              <h3 className="font-semibold text-text-heading">Website</h3>
            </div>

            <p className="text-text-body">{user.website}</p>
          </div>

          <div
            className="
              rounded-xl
              bg-bg-elevated
              p-5
              shadow-sm
            "
          >
            <div className="mb-4 flex items-center gap-3">
              <Building2 className="h-5 w-5 text-brand" />
              <h3 className="font-semibold text-text-heading">Company</h3>
            </div>

            <p className="font-medium text-text-heading">{user.company.name}</p>

            <p className="mt-1 text-sm text-text-muted">
              {user.company.catchPhrase}
            </p>
          </div>

          <div
            className="
              md:col-span-2
              rounded-xl
              bg-bg-elevated
              p-5
              shadow-sm
            "
          >
            <div className="mb-4 flex items-center gap-3">
              <MapPin className="h-5 w-5 text-brand" />
              <h3 className="font-semibold text-text-heading">Address</h3>
            </div>

            <p className="text-text-body">
              {user.address.street}, {user.address.suite}
            </p>

            <p className="mt-1 text-text-muted">{user.address.city}</p>
          </div>
        </div>
      </div>
      <button
        onClick={moveBack}
        className="
                    mt-8
                    mx-auto
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-bg-surface
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-text-body
                    shadow-sm
                    transition-all
                    duration-500
                    hover:bg-neutral-100
                    dark:hover:bg-accent-light
                    border
                    border-border-subtle
  "
      >
        <ArrowLeft className="h-4 w-4" />
        Go Back
      </button>
    </section>
  );
}
