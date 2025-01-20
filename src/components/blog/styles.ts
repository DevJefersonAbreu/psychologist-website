import styled from "styled-components"

export const BlogWrapper = styled.div`
  margin-top: 2rem;
`

export const FeaturedPostWrapper = styled.div`
  margin-bottom: 4rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

export const FeaturedPostContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`

export const FeaturedPostImage = styled.div`
  flex: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 50%;
  }
`

export const FeaturedPostText = styled.div`
  flex: 1;
  padding: 2rem;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.background} 0%, ${(props) => props.theme.colors.white} 100%);
`

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`

export const BlogCard = styled.div`
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`

export const CardImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
`

export const CardHeader = styled.div`
  padding: 1.5rem 1.5rem 0;
`

export const CardContent = styled.div`
  padding: 1rem 1.5rem;
`

export const CardFooter = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardCategory = styled.div`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  margin-bottom: 0.5rem;
`

export const CardTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;
`

export const CardExcerpt = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.8;
`

export const PostMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.7;
`

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const NewsletterSection = styled.div`
  margin-top: 4rem;
`

export const NewsletterCard = styled.div`
  background: linear-gradient(135deg, ${(props) => props.theme.colors.primary}15 0%, ${(props) => props.theme.colors.secondary}15 100%);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`

export const NewsletterCardHeader = styled.div`
  margin-bottom: 1rem;
`

export const NewsletterCardTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
`

export const NewsletterCardContent = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
`

export const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`

export const NewsletterInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.primary}30;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary}30;
  }
`

export const StyledButton = styled.button<{ variant?: 'outline' }>`
  background-color: ${props => props.variant === 'outline' ? 'transparent' : props.theme.colors.primary};
  color: ${props => props.variant === 'outline' ? props.theme.colors.primary : props.theme.colors.white};
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  border: ${props => props.variant === 'outline' ? `1px solid ${props.theme.colors.primary}` : 'none'};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: 15  ${props => props.theme.colors.primary}dd;
  }
`;