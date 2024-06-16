"use client";
import { remoteCall } from "../../common";
export default function UninstallSurvey() {
  const handleFormSubmit = async (event) => {
    //alert(JSON.stringify(event));
    event.preventDefault();
    const formData = new FormData(document.querySelector("form"));
    var object = {};
    for(const key of formData.keys()){
        object[key] = formData.getAll(key);
    }
    var json = JSON.stringify(object);
    const response = await remoteCall('3688217c-38f7-4970-85c6-dc857e865d63',[json])
    window.close()
  };
  return (
    <div className="container text-lg">
      <h2 className="my-4 text-2xl">We&apos;re Sorry to See You Go!</h2>
      <p>
        Thank you for using our browser extension. To help us improve, we would
        appreciate it if you could take a moment to tell us about your
        experience. Your feedback is invaluable and will help us make our
        extension better for everyone.
      </p>

      <form onSubmit={handleFormSubmit}>
        <div className="my-8 grid grid-flow-row grid-cols-3 gap-8">
          <div className="my-2 ">
            <label htmlFor="uninstall-reason">
              Why are you uninstalling the extension? (Please select all that
              apply)
            </label>
            <ul className="px-4">
              <li>
                <input
                  type="checkbox"
                  id="uninstall-reason1"
                  name="uninstall-reason"
                  value="Not useful"
                />{" "}
                Not useful
              </li>
              <li>
                <input
                  type="checkbox"
                  id="uninstall-reason2"
                  name="uninstall-reason"
                  value="Found a better extension"
                />{" "}
                Found a better extension
              </li>
              <li>
                <input
                  type="checkbox"
                  id="uninstall-reason3"
                  name="uninstall-reason"
                  value="Too many bugs"
                />{" "}
                Too many bugs
              </li>
              <li>
                <input
                  type="checkbox"
                  id="uninstall-reason4"
                  name="uninstall-reason"
                  value="Performance issues"
                />{" "}
                Performance issues
              </li>
              <li>
                <input
                  type="checkbox"
                  id="uninstall-reason5"
                  name="uninstall-reason"
                  value="Privacy concerns"
                />{" "}
                Privacy concerns
              </li>
              <li>
                <input
                  type="checkbox"
                  id="uninstall-reason6"
                  name="uninstall-reason"
                  value="Other"
                />{" "}
                Other (please specify)
              </li>
            </ul>
            <input
              type="text"
              id="other-reason"
              name="other-reason"
              placeholder="Please specify other reason"
              className="text-black ml-4"
            ></input>
          </div>
          <div className="my-2">
            <label htmlFor="rating">
              How would you rate your overall experience with our extension?
            </label>
            <ul className="px-4">
              <li>
                <input type="radio" id="rating1" name="rating" value="1" /> 1 -
                Very Poor
              </li>
              <li>
                <input type="radio" id="rating2" name="rating" value="2" /> 2 -
                Poor
              </li>
              <li>
                <input type="radio" id="rating3" name="rating" value="3" /> 3 -
                Average
              </li>
              <li>
                <input type="radio" id="rating4" name="rating" value="4" /> 4 -
                Good
              </li>
              <li>
                <input type="radio" id="rating5" name="rating" value="5" /> 5 -
                Excellent
              </li>
            </ul>
          </div>
          <div className="my-2">
            <label htmlFor="features">
              Which features did you find most useful? (Please select all that
              apply)
            </label>
            <ul className="px-4">
              <li>
                <input
                  type="checkbox"
                  id="feature1"
                  name="features"
                  value="Feature1"
                />{" "}
                Load subtitle from local file
              </li>
              <li>
                <input
                  type="checkbox"
                  id="feature2"
                  name="features"
                  value="Feature2"
                />{" "}
                Matching subtitle from subtitlex database
              </li>
              <li>
                <input
                  type="checkbox"
                  id="feature3"
                  name="features"
                  value="Feature3"
                />{" "}
                Styles adjustment
              </li>
             
            </ul>
          </div>
          <div className="my-2">
            <label htmlFor="improvements">
              Do you have any suggestions for how we could improve our
              extension?
            </label>
            <textarea
              className="w-full text-black"
              id="improvements"
              name="improvements"
              rows="4"
              cols="50"
              placeholder="Your suggestions"
            ></textarea>
          </div>
          <div className="my-2">
            <label htmlFor="recommend">
              Would you recommend our extension to others?
            </label>
            <ul className="px-4">
              <li>
                <input
                  type="radio"
                  id="recommend-yes"
                  name="recommend"
                  value="Yes"
                />{" "}
                Yes
              </li>
              <li>
                <input
                  type="radio"
                  id="recommend-no"
                  name="recommend"
                  value="No"
                />{" "}
                No
              </li>
            </ul>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
