def divide_numbers(a, b):
    """
    Divides two numbers and returns the result.

    Args:
        a (float or int): The numerator.
        b (float or int): The denominator.

    Returns:
        float or str: The result of the division, or an error message if division by zero occurs.
    """
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        return "Error: Cannot divide by zero"
