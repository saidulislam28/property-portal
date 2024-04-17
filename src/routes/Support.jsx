import PageTitle from "../component/PageTitle";

const Support = () => {
  return (
    <div>
       <PageTitle title="pPortal-support"></PageTitle>
      <section className="dark:bg-gray-100 dark:text-gray-800 border container mx-auto rounded-xl">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">
                What types of retail spaces do you offer?
              </h3>
              <p className="mt-1 dark:text-gray-600">
                We offer a variety of retail spaces, including storefronts,
                shopping mall units, kiosks, and pop-up spaces.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                How can I find retail spaces available for lease or sale on your
                website?
              </h3>
              <p className="mt-1 dark:text-gray-600">
                You can easily search for available retail spaces by location,
                size, budget, and other preferences using our advanced search
                filters.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Can I customize the retail space to fit my brands aesthetic?
              </h3>
              <p className="mt-1 dark:text-gray-600">
                Yes, in many cases, we allow tenants to customize their retail
                spaces to reflect their brands aesthetic and meet their specific
                requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Do you offer support for first-time retail business owners?
              </h3>
              <p className="mt-1 dark:text-gray-600">
                Absolutely! We understand that starting a retail business can be
                daunting, and we are here to support you every step of the way.
                Feel free to reach out to our team for guidance and assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className=" flex justify-center mt-5 rounded-xl">
        <div className="flex border flex-col max-w-xl  shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
          <div className="flex flex-col items-center w-full  p-4">
            <h2 className="text-3xl font-semibold text-center">
              Your opinion matters!
            </h2>
            <div className="flex flex-col items-center py-6 space-y-3">
              <span className="text-center">How was your experience?</span>
              <div className="flex space-x-3">
                <button
                  type="button"
                  title="Rate 1 stars"
                  aria-label="Rate 1 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-700"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 2 stars"
                  aria-label="Rate 2 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-700"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 3 stars"
                  aria-label="Rate 3 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-700"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 4 stars"
                  aria-label="Rate 4 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-700"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 5 stars"
                  aria-label="Rate 5 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-gray-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <textarea
                rows="3"
                placeholder="Message..."
                className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"
              ></textarea>
              <button
                type="button"
                className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600 btn "
              >
                Leave feedback
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm dark:text-gray-600"
            >
              Maybe later
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
