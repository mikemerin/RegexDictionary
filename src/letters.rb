open("/Users/flatironschool/Downloads/english3sorted.txt", "w") { |x| x << eval(File.open("/Users/flatironschool/Downloads/english3.txt").first).sort }

dictionary = eval(File.open("/Users/flatironschool/Downloads/english3sorted.txt").first)
("a".."z").to_a.each do |letter|
  File.open("/Users/flatironschool/regex/src/dictionary/#{letter}.js", "a") do |x|
    words, dictionary = dictionary.partition { |word| word.match(/^#{letter}/) }
    puts "#{letter} has #{words.size} words added"
    x << "export const #{letter} = #{words}\n\n\n\n\n\n"
  end
end


# for writing to one file
# open("/Users/flatironschool/Downloads/english3sorted.txt", "w") { |x| x << eval(File.open("/Users/flatironschool/Downloads/english3.txt").first).sort }
#
# dictionary = eval(File.open("/Users/flatironschool/Downloads/english3sorted.txt").first)
# ("a".."z").to_a.each do |letter|
#   File.open("/Users/flatironschool/regex/src/dictionary.js", "a") do |x|
#     words, dictionary = dictionary.partition { |word| word.match(/^#{letter}/) }
#     puts "#{letter} has #{words.size} words added"
#     x << "export const #{letter} = #{words}\n\n\n\n\n\n"
#   end
# end
