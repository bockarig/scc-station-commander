import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export const Home = () => (
  <form>
    <div className="space-y-12">
      <div className="border-brd-line grid grid-cols-1 gap-x-8 gap-y-10 border-b pb-12 md:grid-cols-3">
        <div>
          <h2 className="text-cnt-primary text-base/7 font-semibold">Profile</h2>
          <p className="text-cnt-secondary mt-1 text-sm/6">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>

        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div className="sm:col-span-4">
            <label htmlFor="username" className="text-cnt-primary block text-sm/6 font-medium">
              Amazon alias
            </label>
            <div className="mt-2">
              <div className="focus-within:outline-accent-9 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2">
                <div className="text-cnt-secondary shrink-0 text-base select-none sm:text-sm/6">
                  amazon.com/
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="janesmith"
                  className="text-cnt-primary placeholder:text-cnt-tertiary block min-w-0 grow py-1.5 pr-3 pl-1 text-base focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="about" className="text-cnt-primary block text-sm/6 font-medium">
              About
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="focus:outline-accent-9 text-cnt-primary placeholder:text-cnt-tertiary block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                defaultValue={''}
              />
            </div>
            <p className="text-cnt-secondary mt-3 text-sm/6">
              Write a few sentences about yourself.
            </p>
          </div>

          <div className="col-span-full">
            <label htmlFor="photo" className="text-cnt-primary block text-sm/6 font-medium">
              Photo
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <UserCircleIcon aria-hidden="true" className="text-cnt-tertiary size-12" />
              <button
                type="button"
                className="text-cnt-primary rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
              >
                Change
              </button>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="cover-photo" className="text-cnt-primary block text-sm/6 font-medium">
              Cover photo
            </label>
            <div className="border-brd-control mt-2 flex justify-center rounded-lg border border-dashed px-6 py-10">
              <div className="text-center">
                <PhotoIcon aria-hidden="true" className="text-cnt-tertiary mx-auto size-12" />
                <div className="text-cnt-secondary mt-4 flex text-sm/6">
                  <label
                    htmlFor="file-upload"
                    className="text-accent-9 focus-within:ring-accent-9 hover:text-accent-8 relative cursor-pointer rounded-md bg-white font-semibold focus-within:ring-2 focus-within:ring-offset-2 focus-within:outline-hidden"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-cnt-secondary text-xs/5">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-brd-line grid grid-cols-1 gap-x-8 gap-y-10 border-b pb-12 md:grid-cols-3">
        <div>
          <h2 className="text-cnt-primary text-base/7 font-semibold">Personal Information</h2>
          <p className="text-cnt-secondary mt-1 text-sm/6">
            Use a permanent address where you can receive mail.
          </p>
        </div>

        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="text-cnt-primary block text-sm/6 font-medium">
              First name
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="focus:outline-accent-9 text-cnt-primary placeholder:text-cnt-tertiary block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="text-cnt-primary block text-sm/6 font-medium">
              Last name
            </label>
            <div className="mt-2">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="focus:outline-accent-9 text-cnt-primary placeholder:text-cnt-tertiary block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className="text-cnt-primary block text-sm/6 font-medium">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="focus:outline-accent-9 text-cnt-primary placeholder:text-cnt-tertiary block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="country" className="text-cnt-primary block text-sm/6 font-medium">
              Country
            </label>
            <div className="mt-2 grid grid-cols-1">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="focus:outline-accent-9 text-cnt-primary col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="text-cnt-secondary pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="street-address"
              className="text-cnt-primary block text-sm/6 font-medium"
            >
              Street address
            </label>
            <div className="mt-2">
              <input
                id="street-address"
                name="street-address"
                type="text"
                autoComplete="street-address"
                className="focus:outline-accent-9 text-cnt-primary placeholder:text-cnt-tertiary block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="city" className="text-cnt-primary block text-sm/6 font-medium">
              City
            </label>
            <div className="mt-2">
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="address-level2"
                className="focus:outline-accent-9 text-cnt-primary placeholder:text-cnt-tertiary block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="region" className="text-cnt-primary block text-sm/6 font-medium">
              State / Province
            </label>
            <div className="mt-2">
              <input
                id="region"
                name="region"
                type="text"
                autoComplete="address-level1"
                className="focus:outline-accent-9 text-cnt-primary placeholder:text-cnt-tertiary block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="postal-code" className="text-cnt-primary block text-sm/6 font-medium">
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <input
                id="postal-code"
                name="postal-code"
                type="text"
                autoComplete="postal-code"
                className="focus:outline-accent-9 text-cnt-primary placeholder:text-cnt-tertiary block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-brd-line grid grid-cols-1 gap-x-8 gap-y-10 border-b pb-12 md:grid-cols-3">
        <div>
          <h2 className="text-cnt-primary text-base/7 font-semibold">Notifications</h2>
          <p className="text-cnt-secondary mt-1 text-sm/6">
            We'll always let you know about important changes, but you pick what else you want to
            hear about.
          </p>
        </div>

        <div className="max-w-2xl space-y-10 md:col-span-2">
          <fieldset>
            <legend className="text-cnt-primary text-sm/6 font-semibold">By email</legend>
            <div className="mt-6 space-y-6">
              <div className="flex gap-3">
                <div className="flex h-6 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      defaultChecked
                      id="comments"
                      name="comments"
                      type="checkbox"
                      aria-describedby="comments-description"
                      className="checked:border-accent-9 checked:bg-accent-9 indeterminate:border-accent-9 indeterminate:bg-accent-9 focus-visible:outline-accent-9 border-brd-control disabled:border-brd-control col-start-1 row-start-1 appearance-none rounded-sm border bg-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />
                    <svg
                      fill="none"
                      viewBox="0 0 14 14"
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-checked:opacity-100"
                      />
                      <path
                        d="M3 7H11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-indeterminate:opacity-100"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-sm/6">
                  <label htmlFor="comments" className="text-cnt-primary font-medium">
                    Comments
                  </label>
                  <p id="comments-description" className="text-cnt-secondary">
                    Get notified when someones posts a comment on a posting.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-6 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      aria-describedby="candidates-description"
                      className="checked:border-accent-9 checked:bg-accent-9 indeterminate:border-accent-9 indeterminate:bg-accent-9 focus-visible:outline-accent-9 border-brd-control disabled:border-brd-control col-start-1 row-start-1 appearance-none rounded-sm border bg-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />
                    <svg
                      fill="none"
                      viewBox="0 0 14 14"
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-checked:opacity-100"
                      />
                      <path
                        d="M3 7H11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-indeterminate:opacity-100"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-sm/6">
                  <label htmlFor="candidates" className="text-cnt-primary font-medium">
                    Candidates
                  </label>
                  <p id="candidates-description" className="text-cnt-secondary">
                    Get notified when a candidate applies for a job.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-6 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      aria-describedby="offers-description"
                      className="checked:border-accent-9 checked:bg-accent-9 indeterminate:border-accent-9 indeterminate:bg-accent-9 focus-visible:outline-accent-9 border-brd-control disabled:border-brd-control col-start-1 row-start-1 appearance-none rounded-sm border bg-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />
                    <svg
                      fill="none"
                      viewBox="0 0 14 14"
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-checked:opacity-100"
                      />
                      <path
                        d="M3 7H11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-indeterminate:opacity-100"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-sm/6">
                  <label htmlFor="offers" className="text-cnt-primary font-medium">
                    Offers
                  </label>
                  <p id="offers-description" className="text-cnt-secondary">
                    Get notified when a candidate accepts or rejects an offer.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-cnt-primary text-sm/6 font-semibold">Push notifications</legend>
            <p className="text-cnt-secondary mt-1 text-sm/6">
              These are delivered via SMS to your mobile phone.
            </p>
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-x-3">
                <input
                  defaultChecked
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  className="checked:border-accent-9 checked:bg-accent-9 focus-visible:outline-accent-9 border-brd-control disabled:border-brd-control relative size-4 appearance-none rounded-full border bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden focus-visible:outline-2 focus-visible:outline-offset-2 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                />
                <label
                  htmlFor="push-everything"
                  className="text-cnt-primary block text-sm/6 font-medium"
                >
                  Everything
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  className="checked:border-accent-9 checked:bg-accent-9 focus-visible:outline-accent-9 border-brd-control disabled:border-brd-control relative size-4 appearance-none rounded-full border bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden focus-visible:outline-2 focus-visible:outline-offset-2 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                />
                <label
                  htmlFor="push-email"
                  className="text-cnt-primary block text-sm/6 font-medium"
                >
                  Same as email
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  className="checked:border-accent-9 checked:bg-accent-9 focus-visible:outline-accent-9 border-brd-control disabled:border-brd-control relative size-4 appearance-none rounded-full border bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden focus-visible:outline-2 focus-visible:outline-offset-2 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                />
                <label
                  htmlFor="push-nothing"
                  className="text-cnt-primary block text-sm/6 font-medium"
                >
                  No push notifications
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-cnt-primary text-sm/6 font-semibold">
        Cancel
      </button>
      <button
        type="submit"
        className="bg-accent-9 hover:bg-accent-8 focus-visible:outline-accent-9 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Save
      </button>
    </div>
  </form>
)
