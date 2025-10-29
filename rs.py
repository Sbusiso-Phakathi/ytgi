def divide_numbers(a, b):
    """
    Divides two numbers and returns the result.
    
    Args:
        a (float or int): Numerator.
        b (float or int): Denominator.
    
    Returns:
        float: Result of division a / b.
    
    Raises:
        ValueError: If b is zero.
    """
    if b == 0:
        raise ValueError("Cannot divide by zero.")
    return a / b

# Example usage:
result = divide_numbers(10, 2)
print(result)  # Output: 5.0
