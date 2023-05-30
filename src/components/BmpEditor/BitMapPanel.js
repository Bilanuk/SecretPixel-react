import { useGenerateBitmapMutation, useShowImageQuery } from '../../redux/SecretPixelApi';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdCleaningServices } from 'react-icons/md';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: rgba(100, 100, 100, 0.6);
  color: white;
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  font-weight: 600;
`;

const StyledOption = styled.option`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: rgba(100, 100, 100, 0);
  color: white;
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  font-weight: 600;
`;

const StyledSubmit = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: white;
  color: black;
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  font-weight: 600;

  &:hover {
    background-color: transparent;
    color: white;
`;

const BitMapFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
`;

function BitMapPanel() {
  const currentImageId = useSelector((state) => state.bmpEditor.currentImageId);
  const { data: imageData } = useShowImageQuery(currentImageId);
  const dispatch = useDispatch();

  const [generateBitmap, { data, error, isLoading }] =
    useGenerateBitmapMutation();

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(imageData);
    generateBitmap({
      id: currentImageId,
      method: data.method,
      color: data.color,
    });
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <BitMapFormWrapper>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <StyledSelect defaultValue={imageData?.setting?.method} {...register(`method`)}>
          <StyledOption value="snowflake">snowflake</StyledOption>
          <StyledOption value="carpet">carpet</StyledOption>
          <StyledOption value="triangle">triangle</StyledOption>
        </StyledSelect>
        <StyledSelect defaultValue={imageData?.setting?.color} {...register(`color`)}>
          <StyledOption value="black_white">black_white</StyledOption>
          <StyledOption value="white_black">white_black</StyledOption>
        </StyledSelect>
        <StyledSubmit type="submit" />
      </form>
    </BitMapFormWrapper>
  );
}

export default BitMapPanel;
