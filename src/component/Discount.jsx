
const Discount = () => {
  return (
    <div className="p-6 py-12 bg-violet-200 dark:bg-violet-600 text-gray-900 dark:text-gray-50 container mx-auto mt-5 rounded-xl">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracking-tighter font-bold">
            Up to
            <br className="sm:hidden" />
            50% Off
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>For discount please enter the  code:</span>
            <span className="font-bold text-lg">PHTeam</span>
          </div>
          <p
            className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 border-gray-400 dark:border-gray-600"
          >
            Shop Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discount;
