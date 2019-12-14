// A line has formed to buy tickets for a concert.
// In order to delay a shortage caused by brokers buying large blocks of tickets,
// venue management has decided to sell only one ticket at a time.
// Buyers have to to wait through line again if they want to buy more tickets.
// Jesse is standing in line and has a number of tickets to purchase.

// Given a list of ticket buyers with their numbers of desired tickets,
// determine how long it will take Jesse to purchase his tickets.
// Jesse's position in line will be stated, and each transaction takes 1 unit of time. For your purposes,
// no time is spent moving to the back of the line.
// For example, if the zero indexed array of ticket requirements, tickets = [1, 2, 5] , and Jesse's position p = 1, the first five seconds of ticket sales look like this:

function waitingTime(tickets, p) {
  // Write your code here
  let totalTime = 0;
  for (const [pos, ticket] of tickets.entries()) {
    totalTime += Math.min(ticket, tickets[p] - (pos > p));
  }
  return totalTime;
}
