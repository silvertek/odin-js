def substrings (words, dict)
    subs_count = {}
    words = words.gsub(/[^a-z0-9\s]/i, '').downcase
    words = words.split(' ')
    p words
    dict.each do |subs|
        count = 0
        
        words.each do |word|
            if word.include? subs
                count +=1
            end
        end
        
        if count > 0
            subs_count[subs] = count
        end
    end
    p subs_count
end

dictionary = ["ball","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
substrings("Howdy partner, sit down! How's it going?", dictionary)