import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './SeatBooking.css';

const getSeatPrice = (row) => {
  if (row <= 2) return 100;
  if (row <= 4) return 150;
  return 200;
};

const Cart = () => {
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const poster = Cookies.get('selectedPoster');
    const image = Cookies.get('selectedImage');
    if (poster) {
      setSelectedPoster(poster);
    }
    if (image) {
      setSelectedImage(image);
    }
  }, []);

  const toggleSeat = (seatId) => {
    const isSelected = selectedSeats.includes(seatId);
    
    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      if (selectedSeats.length >= 8) {
       alert("You can only select up to 8 seats");
        return;
      }
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  useEffect(() => {
    let total = 0;
    selectedSeats.forEach((seatId) => {
      const row = seatId.charAt(0);
      const rowNumber = row.charCodeAt(0) - 65;
      total += getSeatPrice(rowNumber);
    });
    setTotalCost(total);
    setErrorMessage("");
  }, [selectedSeats]);

  const generateSeats = () => {
    const rows = 6;
    const seatsPerRow = 10;
    const seats = [];
    for (let row = 0; row < rows; row++) {
      const rowSeats = [];
      for (let seat = 0; seat < seatsPerRow; seat++) {
        const seatId = `${String.fromCharCode(65 + row)}${seat + 1}`;
        const price = getSeatPrice(row);
        const isSelected = selectedSeats.includes(seatId);

        let seatColor = '';
        if (price === 100) {
          seatColor = 'red';
        } else if (price === 150) {
          seatColor = 'green';
        } else {
          seatColor = 'blue';
        }

        rowSeats.push(
          <div
            key={seatId}
            className={`seat ${isSelected ? "selected" : ""}`}
            onClick={() => toggleSeat(seatId)}
            style={{
              backgroundColor: isSelected ? "yellow" : seatColor,
            }}
          >
            {seatId}
          </div>
        );
      }
      seats.push(
        <div key={`row-${row}`} className="row">
          {rowSeats}
        </div>
      );
    }
    return seats;
  };

  const bookingSummary = () => {
    return (
      <div className="booking-summary">
        <h2 style={{color: 'white'}}>Booking Summary</h2>
        <p>Poster: {selectedPoster}</p>
        <ul>
          {selectedSeats.map((seat) => (
            <li key={seat}>
              {seat} - ₹{getSeatPrice(seat.charAt(0).charCodeAt(0) - 65)}
            </li>
          ))}
        </ul>
        <h3>Total Cost: ₹{totalCost}</h3>
        {selectedSeats.length > 0 && (
          <button onClick={() => alert(`Booked seats at ₹${totalCost}`)}>Book Now</button>
        )}
      </div>
    );
  };

  return (
    <div className="cart-and-seat-booking">
      <div className="cart-section">
        <h1>Movie: {selectedPoster}</h1>
        {selectedImage && <img src={selectedImage} alt="Poster" className="movie-poster-image" />}
        {selectedPoster ? (
          <p> </p>
        ) : (
          <p>No poster selected.</p>
        )}
      </div>
      
      <div className="seat-booking-section">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="seat-grid">{generateSeats()}</div>
        {bookingSummary()}
      </div>
    </div>
  );
};

export default Cart;
