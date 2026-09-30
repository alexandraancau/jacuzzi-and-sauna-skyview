import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Page = styled.div`
  min-height: 100vh;
  background: ${(p) => p.theme.colors.warmIvory};
  color: ${(p) => p.theme.colors.deepGraphite};
`;

export const PageShell = styled.main`
  max-width: 1180px;
  margin: 88px auto 0;
  padding: 0 ${(p) => p.theme.spacing.sm}px 32px;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding: 0 ${(p) => p.theme.spacing.md}px 52px;
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 22px;
  color: ${(p) => p.theme.colors.deepGraphite};
  text-decoration: none;
  font-size: ${(p) => p.theme.typography.fontSizes.md}px;
  opacity: 0.9;
`;

export const Heading = styled.h1`
  margin: 18px 0 8px;
  color: ${(p) => p.theme.colors.deepGraphite};
  font-family: ${(p) => p.theme.typography.headingFontFamily};
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 0.94;
  letter-spacing: -0.05em;
`;

export const Subheading = styled.p`
  margin: 0;
  color: ${(p) => p.theme.colors.deepGraphite};
  font-size: ${(p) => p.theme.typography.fontSizes.xl}px;
  opacity: 0.8;
`;

export const MainLayout = styled.section`
  display: grid;
  gap: ${(p) => p.theme.spacing.lg}px;
  margin-top: 28px;
  align-items: start;

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    grid-template-columns: minmax(0, 1.7fr) minmax(280px, 0.72fr);
  }
`;

export const CalendarWrap = styled.div`
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radius.large}px;
  padding: ${(p) => p.theme.spacing.lg}px;
`;

export const CalendarHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${(p) => p.theme.spacing.lg}px;
`;

export const MonthColumn = styled.div`
  min-width: 0;
`;

export const MonthName = styled.h2`
  margin: 0 0 14px;
  color: ${(p) => p.theme.colors.deepGraphite};
  font-size: ${(p) => p.theme.typography.fontSizes.xl}px;
  font-family: ${(p) => p.theme.typography.headingFontFamily};
  font-weight: ${(p) => p.theme.typography.fontWeights.semibold};
`;

export const MonthNav = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${(p) => p.theme.spacing.sm}px;
  margin-top: -8px;
  margin-bottom: 16px;
`;

export const NavButton = styled.button`
  width: 34px;
  height: 34px;
  border: 1px solid transparent;
  background: transparent;
  color: ${(p) => p.theme.colors.deepGraphite};
  font-size: 28px;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const WeekdayRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 4px;
  margin-bottom: 8px;
`;

export const WeekdayCell = styled.div`
  text-align: center;
  color: ${(p) => p.theme.colors.textMuted};
  font-size: ${(p) => p.theme.typography.fontSizes.xs}px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  min-height: 20px;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 6px;
`;

export const DayCell = styled.button<{ $isCurrentMonth: boolean; $isSelected: boolean; $isUnavailable: boolean }>`
  width: 100%;
  height: 44px;
  border: 1px solid transparent;
  border-radius: ${(p) => p.theme.radius.small}px;
  background: ${(p) => {
    if (p.$isSelected) return p.theme.colors.signaturePlum;
    if (p.$isUnavailable) return '#E7E2DE';
    return 'transparent';
  }};
  color: ${(p) => (p.$isSelected ? p.theme.colors.warmIvory : p.theme.colors.deepGraphite)};
  font-size: ${(p) => p.theme.typography.fontSizes.sm}px;
  opacity: ${(p) => (p.$isCurrentMonth ? 1 : 0.45)};
  cursor: ${(p) => (p.$isUnavailable ? 'not-allowed' : 'pointer')};
  transition: transform 150ms ease, opacity 150ms ease;

  &:hover {
    ${(p) => !p.$isUnavailable && !p.$isSelected && 'transform: translateY(-1px);'}
  }
`;

export const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.spacing.md}px;
  margin-top: 20px;
`;

export const LegendItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${(p) => p.theme.colors.textMuted};
  font-size: ${(p) => p.theme.typography.fontSizes.xs}px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const LegendSwatch = styled.span<{ $color: string }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(p) => p.$color};
`;

export const InfoCard = styled.aside`
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radius.large}px;
  padding: ${(p) => p.theme.spacing.md}px;
`;

export const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: ${(p) => p.theme.radius.medium}px;
  margin-bottom: ${(p) => p.theme.spacing.md}px;
`;

export const CardTitle = styled.h3`
  margin: 0 0 18px;
  color: ${(p) => p.theme.colors.deepGraphite};
  font-family: ${(p) => p.theme.typography.headingFontFamily};
  font-size: clamp(1.4rem, 2vw, 2rem);
  line-height: 1.2;
`;

export const AmenityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;
`;

export const AmenityItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(p) => p.theme.colors.deepGraphite};
  font-size: ${(p) => p.theme.typography.fontSizes.md}px;
`;

export const AmenityIcon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
  opacity: 0.9;
`;

export const AmenityText = styled.span`
  color: ${(p) => p.theme.colors.deepGraphite};
  line-height: 1.4;
`;

export const DetailsLink = styled(Link)`
  display: inline-block;
  margin-top: 18px;
  color: ${(p) => p.theme.colors.deepGraphite};
  text-decoration: none;
  font-size: ${(p) => p.theme.typography.fontSizes.md}px;
  font-weight: ${(p) => p.theme.typography.fontWeights.semibold};
`;

export const SummaryPanel = styled.section`
  margin-top: 28px;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radius.large}px;
  padding: ${(p) => p.theme.spacing.lg}px;
  display: grid;
  gap: ${(p) => p.theme.spacing.md}px;
`;

export const SummaryRow = styled.div`
  display: grid;
  gap: 8px;
  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    grid-template-columns: 180px 1fr;
    align-items: center;
  }
`;

export const SummaryLabel = styled.span`
  color: ${(p) => p.theme.colors.textMuted};
  font-size: ${(p) => p.theme.typography.fontSizes.sm}px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const SummaryValue = styled.span`
  color: ${(p) => p.theme.colors.deepGraphite};
  font-size: ${(p) => p.theme.typography.fontSizes.md}px;
  font-weight: ${(p) => p.theme.typography.fontWeights.semibold};
`;

export const GuestSelect = styled.select`
  width: 100%;
  max-width: 220px;
  height: 46px;
  border-radius: ${(p) => p.theme.radius.medium}px;
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) => p.theme.colors.deepGraphite};
  padding: 0 12px;
  font-size: ${(p) => p.theme.typography.fontSizes.md}px;
`;

export const StatusPill = styled.span<{ $valid: boolean }>`
  display: inline-flex;
  align-items: center;
  align-self: start;
  min-height: 28px;
  padding: 6px 12px;
  border-radius: 9999px;
  background: ${(p) => (p.$valid ? 'rgba(122, 98, 116, 0.12)' : 'rgba(107, 114, 128, 0.1)')};
  color: ${(p) => (p.$valid ? p.theme.colors.signaturePlumDark : p.theme.colors.textMuted)};
  font-size: ${(p) => p.theme.typography.fontSizes.xs}px;
  font-weight: ${(p) => p.theme.typography.fontWeights.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const SummaryActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.spacing.md}px;
  margin-top: ${(p) => p.theme.spacing.md}px;
`;

export const PromptText = styled.p`
  margin: 0;
  color: ${(p) => p.theme.colors.textMuted};
  font-size: ${(p) => p.theme.typography.fontSizes.sm}px;
  line-height: 1.6;
`;

export const SummaryMessage = styled.p`
  margin: 0;
  padding: 12px 14px;
  border-radius: ${(p) => p.theme.radius.medium}px;
  background: rgba(122, 98, 116, 0.08);
  border: 1px solid rgba(122, 98, 116, 0.14);
  color: ${(p) => p.theme.colors.signaturePlumDark};
  font-size: ${(p) => p.theme.typography.fontSizes.sm}px;
  line-height: 1.5;
`;
