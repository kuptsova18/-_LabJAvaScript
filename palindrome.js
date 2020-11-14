function palindrome(str)
{
    str=str.ToLower().replce(/\s/g,'')
    return str===str.Split('').reverse().join('')
}