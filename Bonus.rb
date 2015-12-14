def multiples(n)
    n = n.to_i
    total = 0
   (1...n).each do |i|
        if (i%3==0 || i%5==0)
            total = total + i
        end
    end
    puts total
end

def fib(n)
    n = n.to_i
    fib_array = [1,2]
    i = 1
    nextval = 0
    total = 0
    while fib_array[i] < n do
        nextval = (fib_array[i] + fib_array[i-1])
        fib_array << nextval
        i += 1
    end
    
    fib_array.each do |val|
        if val%2 == 0
            total += val
        end
    end
    return total
    
end

def gcf(n)
    factors = []
    numstorage = n
    x = 2
    until numstorage ==1 do
        result = numstorage % x
        if result == 0
            factors << x
            numstorage = numstorage/x
            x = 2
        else
            x += 1
        end
        
    end
    return factors[-1]
end
    
puts fib(4000000000)
puts gcf(600851475143)
puts "Please enter a number:"
multiples(gets.chomp)