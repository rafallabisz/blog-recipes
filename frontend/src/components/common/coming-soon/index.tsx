import { FC, memo } from "react";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import Image from "next/image";

const StyledComingSoonContainer = styled.div`
  position: relative;
  background-color: ${theme.colors.black};
`;

const StyledComingSoonImageWrapper = styled.div`
  opacity: 0.8;
  min-height: 600px;
  position: relative;
`;

const StyledContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.colors.white};
  text-align: center;
  width: 100%;
`;

const StyledTitle = styled.h1`
  font-weight: ${theme.fontWeights.light};
  font-size: ${theme.fontSizes.lg};
  margin-bottom: 8px;
  line-height: ${theme.lineHeights.lg};

  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fontSizes.xxl};
  }
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.xxl3};
    line-height: ${theme.lineHeights.lg58};
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    font-size: ${theme.fontSizes.xxl48};
  }
`;
const StyledDescription = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeights.sm};
  margin-bottom: 0;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.xs};
  }
`;

type Props = {};

const ComingSoon: FC<Props> = () => {
  return (
    <StyledComingSoonContainer>
      <StyledComingSoonImageWrapper>
        <Image
          src={"/assets/images/coming-soon.png"}
          layout={"fill"}
          objectPosition={"center"}
          alt={"Coming soon"}
          quality={100}
          objectFit={"cover"}
          priority
        />
      </StyledComingSoonImageWrapper>

      <StyledContentWrapper>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col"}>
              <StyledTitle>Page under renovation</StyledTitle>
              <StyledDescription>
                Make yourself a coffee and please wait. We are coming soon!
              </StyledDescription>
            </div>
          </div>
        </div>
      </StyledContentWrapper>
    </StyledComingSoonContainer>
  );
};

export default memo(ComingSoon);
