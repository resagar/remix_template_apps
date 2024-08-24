export const Accordion = () => (
  <>
    <div className="collapse collapse-plus">
      <input
        id="feature1"
        type="radio"
        name="features"
        className="peer"
        defaultChecked
      />
      <label
        htmlFor="feature1"
        className="collapse-title text-lg text-left font-medium text-base-content peer-checked:text-primary"
      >
        Click to open this one and close others
      </label>
      <div className="collapse-content text-left">
        <p>hello</p>
      </div>
    </div>
    <div className="collapse collapse-plus">
      <input id="feature2" type="radio" name="features" className="peer" />
      <label
        htmlFor="feature2"
        className="collapse-title text-left font-medium text-lg peer-checked:text-primary text-base-content"
      >
        Click to open this one and close others
      </label>
      <div className="collapse-content text-left">
        <p>hello</p>
      </div>
    </div>
    <div className="collapse collapse-plus ">
      <input id="feature3" type="radio" name="features" className="peer" />
      <label
        htmlFor="feature3"
        className="collapse-title text-lg text-left font-medium peer-checked:text-primary text-base-content"
      >
        Click to open this one and close others
      </label>
      <div className="collapse-content text-left">
        <p>hello</p>
      </div>
    </div>
  </>
);
