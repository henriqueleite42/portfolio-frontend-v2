import React, { useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

import Button from "Components/Button";
import Input from "Components/Input";

import { randomNumber } from "Utils/Math";

import { Header, Description, ButtonContainer } from "./style";

const Contact: React.FC = () => {
  const [validation, setValidation] = useState({
    number1: randomNumber(10),
    number2: randomNumber(10),
  });

  const onSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  const { register, handleSubmit, errors } = useForm();

  return (
    <>
      <Helmet>
        <title>Razal&#39;s Portfolio - Contact</title>
      </Helmet>
      <Header>
        <span>Contact</span>
      </Header>
      <Description>
        You can contact me by me social media, or by the form below:
      </Description>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name"
          name="name"
          isRequired
          placeholder="Renato Razal"
          innerRef={register({
            required: true,
          })}
          errorMessage={errors.name && "This Field Is Required."}
        />
        <Input
          label="Email"
          name="email"
          isRequired
          placeholder="renatorazal42@gmail.com"
          innerRef={register({
            required: true,
          })}
          errorMessage={errors.email && "This Field Is Required."}
        />
        <Input
          label="Website"
          name="website"
          placeholder="renatorazal.com"
          innerRef={register()}
        />
        <Input
          label="Budget"
          name="budget"
          placeholder="USD 1.000.000,00"
          innerRef={register()}
        />
        <Input
          label="Deadline"
          name="deadline"
          placeholder="30 days"
          innerRef={register()}
        />
        <Input
          label={`${validation.number1} + ${validation.number2}`}
          name="validation"
          isRequired
          placeholder="Are you a human?"
          innerRef={register({
            required: true,
          })}
          errorMessage={errors.validation && "This Field Is Required."}
        />
        <Input
          label="Tell me a little about your project"
          name="description"
          textarea
          placeholder="It's a Website? A Startup? A Landing Page?"
          innerRef={register()}
        />
        <ButtonContainer>
          <Button aria-label="submit">Submit</Button>
        </ButtonContainer>
      </form>
    </>
  );
};

export default Contact;
