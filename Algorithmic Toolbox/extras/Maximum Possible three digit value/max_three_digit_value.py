def increase_digits(N, K):
    digits = list(str(N))  # Convert N to a list of digits
    remaining_increases = K

    for i in range(len(digits)):
        if digits[i] != '9':  # If the digit is not already 9, we can increase it
            increases = min(9 - int(digits[i]), remaining_increases)  # Calculate the number of increases possible for this digit
            digits[i] = str(int(digits[i]) + increases)  # Increase the digit
            remaining_increases -= increases  # Update the remaining increases

        if remaining_increases == 0:  # If we have no remaining increases, break the loop
            break

    return int(''.join(digits)) 
if __name__ == "__main__":
    print(increase_digits(512,10))
    