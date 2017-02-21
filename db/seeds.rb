require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'products.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  Product.create!(row.to_hash)
end

# csv.each do |row|
#   Product.create! \
#     name: row['name']
#     brand: row['brand']
#     image: row['image']
#     price: row['price']
#     description: row['description'
#     description_short: row['description_short']
#     gender: row['gender']
#     tag_one: row['tag_one']
#     tag_two: row['tag_two']
#     sell_priority: row['sell_priority']
#     supplier_name: ow['supplier_name']
#     stock: row['stock']
#     availability: row['availability']
#     online_supplied: row['online_supplied']
# end
