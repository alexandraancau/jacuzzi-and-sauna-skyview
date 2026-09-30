import React, { useMemo, useState } from 'react';
import Button from '../../components/ui/Button/Button';
import Header from '../../components/shared/Header/Header';
import Footer from '../footer';
import apartmentImage from '../../assets/images/sauna-interior.jpg';
import bedroomIcon from '../../assets/icons/apartment/bed.svg';
import bathroomIcon from '../../assets/icons/apartment/bathroom.svg';
import guestsIcon from '../../assets/icons/apartment/guests.svg';
import jacuzziIcon from '../../assets/icons/apartment/bathroom.svg';
import cityIcon from '../../assets/icons/location/city-centre.svg';
import parkingIcon from '../../assets/icons/location/private-parking.svg';
import {
  Page,
  PageShell,
  BackLink,
  Heading,
  Subheading,
  MainLayout,
  CalendarWrap,
  MonthColumn,
  CalendarHeader,
  MonthName,
  MonthNav,
  NavButton,
  WeekdayRow,
  WeekdayCell,
  CalendarGrid,
  DayCell,
  Legend,
  LegendItem,
  LegendSwatch,
  InfoCard,
  InfoImage,
  CardTitle,
  AmenityList,
  AmenityItem,
  AmenityIcon,
  AmenityText,
  DetailsLink,
  SummaryPanel,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
  SummaryActions,
  SummaryMessage,
  GuestSelect,
  StatusPill,
  PromptText,
} from './Availability.styles';
import { MINIMUM_STAY_NIGHTS, buildMockUnavailableDates, toISODate } from './availabilityData';
import {
  formatFullDate,
  formatMonthYear,
  getCalendarDays,
  getDateDifferenceInNights,
  getDateRange,
  isDateUnavailable,
  isPastDate,
  isStayValid,
  startOfDay,
} from './bookingUtils';

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const APARTMENT_AMENITIES = [
  { label: '2 bedrooms', icon: bedroomIcon },
  { label: '2 bathrooms', icon: bathroomIcon },
  { label: 'Up to 6 guests', icon: guestsIcon },
  { label: 'Private jacuzzi & sauna', icon: jacuzziIcon },
  { label: 'City views', icon: cityIcon },
  { label: 'Free parking & EV charging', icon: parkingIcon },
];

const AvailabilityPage: React.FC = () => {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [displayMonth, setDisplayMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guestCount, setGuestCount] = useState<number>(2);
  const [prototypeMessage, setPrototypeMessage] = useState<string>('');

  const unavailableDates = useMemo(() => buildMockUnavailableDates(today), [today]);
  const visibleMonths = useMemo(
    () => [
      new Date(displayMonth.getFullYear(), displayMonth.getMonth(), 1),
      new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1, 1),
    ],
    [displayMonth],
  );

  const selectionState = useMemo(() => isStayValid(checkIn, checkOut, unavailableDates), [checkIn, checkOut, unavailableDates]);
  const canContinue = selectionState.valid;

  const handleMonthChange = (direction: number) => {
    setDisplayMonth((current) => new Date(current.getFullYear(), current.getMonth() + direction, 1));
  };

  const handleDateSelection = (date: Date) => {
    const normalizedDate = startOfDay(date);

    if (isDateUnavailable(normalizedDate, unavailableDates)) {
      return;
    }

    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(normalizedDate);
      setCheckOut(null);
      setPrototypeMessage('');
      return;
    }

    if (normalizedDate <= checkIn) {
      setCheckIn(normalizedDate);
      setCheckOut(null);
      setPrototypeMessage('');
      return;
    }

    const range = getDateRange(checkIn, normalizedDate);
    if (range.some((day) => isDateUnavailable(day, unavailableDates))) {
      setCheckIn(normalizedDate);
      setCheckOut(null);
      setPrototypeMessage('');
      return;
    }

    const nights = getDateDifferenceInNights(checkIn, normalizedDate);
    if (nights < MINIMUM_STAY_NIGHTS) {
      setCheckIn(normalizedDate);
      setCheckOut(null);
      setPrototypeMessage('');
      return;
    }

    setCheckOut(normalizedDate);
    setPrototypeMessage('');
  };

  const clearSelection = () => {
    setCheckIn(null);
    setCheckOut(null);
    setPrototypeMessage('');
  };

  const isDateInRange = (date: Date) => {
    if (!checkIn || !checkOut) {
      return false;
    }
    return startOfDay(date) >= startOfDay(checkIn) && startOfDay(date) <= startOfDay(checkOut);
  };

  const isDateSelected = (date: Date) => {
    if (!checkIn) {
      return false;
    }
    return toISODate(date) === toISODate(checkIn) || (checkOut ? toISODate(date) === toISODate(checkOut) : false);
  };

  const nights = checkIn && checkOut ? getDateDifferenceInNights(checkIn, checkOut) : 0;

  return (
    <Page>
      <Header />

      <PageShell>
        <BackLink to="/">← Back to home</BackLink>
        <Heading>Check availability</Heading>
        <Subheading>Select your dates to see availability and pricing.</Subheading>

        <MainLayout>
          <CalendarWrap aria-label="Booking calendar for available nights">
            <CalendarHeader>
              <MonthColumn>
                <MonthName>{formatMonthYear(visibleMonths[0])}</MonthName>
              </MonthColumn>
              <MonthColumn>
                <MonthName>{formatMonthYear(visibleMonths[1])}</MonthName>
              </MonthColumn>
            </CalendarHeader>

            <MonthNav>
              <NavButton type="button" aria-label="Previous month" onClick={() => handleMonthChange(-1)}>
                ‹
              </NavButton>
              <NavButton type="button" aria-label="Next month" onClick={() => handleMonthChange(1)}>
                ›
              </NavButton>
            </MonthNav>

            <CalendarHeader>
              {visibleMonths.map((monthDate) => {
                const monthDays = getCalendarDays(monthDate);
                const firstDay = monthDate.getDay();
                const offset = (firstDay + 6) % 7;
                const monthCells = monthDays.slice(offset, offset + 35);

                return (
                  <MonthColumn key={monthDate.toISOString()}>
                    <WeekdayRow>
                      {WEEKDAYS.map((day) => (
                        <WeekdayCell key={`${monthDate.toISOString()}-${day}`}>{day}</WeekdayCell>
                      ))}
                    </WeekdayRow>

                    <CalendarGrid>
                      {monthCells.map((date) => {
                        const isCurrentMonth = date.getMonth() === monthDate.getMonth();
                        const isUnavailable = isDateUnavailable(date, unavailableDates) || isPastDate(date);
                        const isSelected = isDateSelected(date) || isDateInRange(date);
                        const isDisabled = isUnavailable;

                        return (
                          <DayCell
                            key={`${monthDate.toISOString()}-${toISODate(date)}`}
                            type="button"
                            $isCurrentMonth={isCurrentMonth}
                            $isSelected={isSelected}
                            $isUnavailable={isUnavailable}
                            disabled={isDisabled}
                            onClick={() => handleDateSelection(date)}
                            aria-label={date.toDateString()}
                          >
                            {date.getDate()}
                          </DayCell>
                        );
                      })}
                    </CalendarGrid>
                  </MonthColumn>
                );
              })}
            </CalendarHeader>

            <Legend>
              <LegendItem>
                <LegendSwatch $color="#B9C7B1" /> Available
              </LegendItem>
              <LegendItem>
                <LegendSwatch $color="#7A6274" /> Selected
              </LegendItem>
              <LegendItem>
                <LegendSwatch $color="#E7E2DE" /> Unavailable
              </LegendItem>
            </Legend>
          </CalendarWrap>

          <InfoCard>
            <InfoImage src={apartmentImage} alt="Private jacuzzi and terrace at Skyview" />
            <CardTitle>Jacuzzi &amp; Sauna Skyview Apartment</CardTitle>
            <AmenityList>
              {APARTMENT_AMENITIES.map(({ label, icon }) => (
                <AmenityItem key={label}>
                  <AmenityIcon src={icon} alt="" aria-hidden="true" />
                  <AmenityText>{label}</AmenityText>
                </AmenityItem>
              ))}
            </AmenityList>
            <DetailsLink to="/#apartment">View details →</DetailsLink>
          </InfoCard>
        </MainLayout>

        <SummaryPanel>
          <SummaryRow>
            <SummaryLabel>Check-in</SummaryLabel>
            <SummaryValue>{checkIn ? formatFullDate(checkIn) : 'Select a date'}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Check-out</SummaryLabel>
            <SummaryValue>{checkOut ? formatFullDate(checkOut) : 'Select a date'}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Number of nights</SummaryLabel>
            <SummaryValue>{nights > 0 ? `${nights} night${nights > 1 ? 's' : ''}` : '—'}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Guests</SummaryLabel>
            <GuestSelect
              aria-label="Number of guests"
              value={guestCount}
              onChange={(event) => setGuestCount(Number(event.target.value))}
            >
              {[1, 2, 3, 4, 5, 6].map((count) => (
                <option key={count} value={count}>
                  {count} guest{count > 1 ? 's' : ''}
                </option>
              ))}
            </GuestSelect>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Reservation status</SummaryLabel>
            <StatusPill $valid={selectionState.valid}>{selectionState.valid ? 'Ready to review' : selectionState.message}</StatusPill>
          </SummaryRow>

          <SummaryActions>
            <Button type="button" variant="primary" size="large" disabled={!canContinue} onClick={() => setPrototypeMessage('Prototype only: online reservations are not enabled yet. This flow is ready for booking backend integration.') }>
              Continue to Booking
            </Button>
            <Button type="button" variant="secondary" size="large" onClick={clearSelection}>
              Clear dates
            </Button>
          </SummaryActions>

          <PromptText>Minimum stay of {MINIMUM_STAY_NIGHTS} nights. Selected stays must avoid blocked dates.</PromptText>
          {prototypeMessage ? <SummaryMessage>{prototypeMessage}</SummaryMessage> : null}
        </SummaryPanel>
      </PageShell>

      <Footer />
    </Page>
  );
};

export default AvailabilityPage;
