import { useNavigate } from 'react-router-dom'
import { StyledSelect, StyledOption } from '../../styles/index'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

const Select = () => {
  const [category, setCategory] = useState('')
  const navigate = useNavigate()
  return (
    <>
      <StyledSelect
        name="categories"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value)
          navigate('/product')
        }}
      >
        <StyledOption selected onClick={() => navigate('/product')}>
          Collections
        </StyledOption>
        <StyledOption>Casual</StyledOption>
        <StyledOption>Fitness</StyledOption>
        <StyledOption>Track</StyledOption>
        <StyledOption>Sports</StyledOption>
      </StyledSelect>
    </>
  )
}
export default Select
