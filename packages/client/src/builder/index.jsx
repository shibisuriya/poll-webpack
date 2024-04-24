import React, { Fragment, useState } from "react";
import {
  FormField,
  Button,
  Checkbox,
  Form,
  Input,
  FormInput,
  Header,
  Image,
  Container,
  Dropdown,
  Divider,
  FormGroup,
} from "semantic-ui-react";

const OPTIONS = [
  {
    key: "Single Select",
    text: "Single Select",
    value: "Single Select",
  },
  {
    key: "Multi Select",
    text: "Multi Select",
    value: "Multi Select",
  },
];

export default function Builder() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission]]
    console.log(e);
    console.log("question", question);
    console.log("options", options);
  };

  return (
    <Fragment>
      <div className="builderWrapper">
        <Header as="h2" textAlign="center">
          <Image
            circular
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmKWNeclR-mwng7chTxJIqoo-2jvgL9ltBgGDl8X1iwQ&s"
          />
          <Container textAlign="center">Poll Builder</Container>
        </Header>
        <Form onSubmit={handleSubmit}>
          <FormGroup className="fieldsGroup">
            <div className="dropDown">
              <FormField
                control={Input}
                placeholder="Enter Question"
                onChange={(e) => setQuestion(e.target.value)}
              />
              <Dropdown
                inline
                options={OPTIONS}
                defaultValue={OPTIONS[0].value}
              />
            </div>
            {options.map((option, index) => (
              <Form.Field key={index}>
                <label>Option {index + 1}</label>
                <input
                  placeholder={`Enter option ${index + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
              </Form.Field>
            ))}
          </FormGroup>

          <Button onClick={handleAddOption}>Add Option</Button>

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </Fragment>
  );
}
