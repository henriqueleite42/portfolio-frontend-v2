import React, { useCallback } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

import Button from "Components/Button";
import Textarea from "Components/Textarea";
import TextInput from "Components/TextInput";

import getPageTile from "Hooks/usePageTitle";

import { Header, Description, ButtonContainer } from "./style";

const Contact: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <>
      <Helmet>
        <title>{getPageTile("contact")}</title>
      </Helmet>
      <Header>
        <span>Contact</span>
      </Header>
      <Description>
        You can contact me by my social media, or by the form below:
      </Description>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Name"
          name="name"
          isRequired
          placeholder="Renato Razal"
          innerRef={register({
            required: true,
          })}
          errorMessage={errors.name && "This Field Is Required."}
        />
        <TextInput
          label="Email"
          name="email"
          isRequired
          placeholder="renatorazal42@gmail.com"
          innerRef={register({
            required: true,
          })}
          errorMessage={errors.email && "This Field Is Required."}
        />
        <TextInput
          label="Website"
          name="website"
          placeholder="renatorazal.com"
          innerRef={register()}
        />
        <TextInput
          label="Budget"
          name="budget"
          placeholder="USD 1.000.000,00"
          innerRef={register()}
        />
        <TextInput
          label="Deadline"
          name="deadline"
          placeholder="30 days"
          innerRef={register()}
        />
        <Textarea
          label="Tell me about your project"
          name="description"
          isRequired
          placeholder={
            "It's a Website? A Landing Page? Maybe a Store?\nAbout what? Pets? Fishing? Games?"
          }
          limit={1000}
          innerRef={register({
            required: true,
            maxLength: 1000,
          })}
          errorMessage={
            errors.description &&
            (errors.description.type === "required"
              ? "This Field Is Required."
              : "Limit exceeded")
          }
        />
        <ButtonContainer>
          <Button aria-label="submit">Submit</Button>
        </ButtonContainer>
      </form>
    </>
  );
};

export default Contact;
