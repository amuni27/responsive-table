import React from "react";

const data = [
    {
        Product: "R960",
        Rail_identifier: "B19",
        Mounting_interface: "Generic Tool-less Drop-in/Stab-in",
        Rail_type: "✓",
        Rack_types_supported: {
            "4-Post": {
                Square: "✓",
                Round: "✓",
                Thread: "✓"
            },
            "2-Post": {
                Flush: "X",
                Center: "X"
            }
        },
        Rail_adjustability_range_mm: {
            Square: {
                min:56,
                max:68,
            },
            Round: {
                min:56,
                max:68,
            },
            Thread: {
                min:56,
                max:68,
            }
        },
        Rail_depth_mm: {
            without: "608n",
            with: "-"
        }
        // Add more properties for each column as needed
    },
    {
        Product: "R960",
        Rail_identifier: "B19",
        Mounting_interface: "Generic Tool-less Drop-in/Stab-in",
        Rail_type: "✓",
        Rack_types_supported: {
            "4-Post": {
                Square: "✓",
                Round: "✓",
                Thread: "✓"
            },
            "2-Post": {
                Flush: "X",
                Center: "X"
            }
        },
        Rail_adjustability_range_mm: {
            Square: {
                min:56,
                max:68,
            },
            Round: {
                min:56,
                max:68,
            },
            Thread: {
                min:56,
                max:68,
            }
        },
        Rail_depth_mm: {
            without: "608n",
            with: "-"
        }
        // Add more properties for each column as needed
    },
    {
        Product: "R960",
        Rail_identifier: "B19",
        Mounting_interface: "Generic Tool-less Drop-in/Stab-in",
        Rail_type: "✓",
        Rack_types_supported: {
            "4-Post": {
                Square: "✓",
                Round: "✓",
                Thread: "✓"
            },
            "2-Post": {
                Flush: "X",
                Center: "X"
            }
        },
        Rail_adjustability_range_mm: {
            Square: {
                min:56,
                max:68,
            },
            Round: {
                min:56,
                max:68,
            },
            Thread: {
                min:56,
                max:68,
            }
        },
        Rail_depth_mm: {
            without: "608n",
            with: "-"
        }
        // Add more properties for each column as needed
    },
    {
        Product: "R960",
        Rail_identifier: "B19",
        Mounting_interface: "Generic Tool-less Drop-in/Stab-in",
        Rail_type: "✓",
        Rack_types_supported: {
            "4-Post": {
                Square: "✓",
                Round: "✓",
                Thread: "✓"
            },
            "2-Post": {
                Flush: "X",
                Center: "X"
            }
        },
        Rail_adjustability_range_mm: {
            Square: {
                min:56,
                max:68,
            },
            Round: {
                min:56,
                max:68,
            },
            Thread: {
                min:56,
                max:68,
            }
        },
        Rail_depth_mm: {
            without: "608n",
            with: "-"
        }
        // Add more properties for each column as needed
    },
    // Add more data objects for each row
];

const App = () => {
    return (
        <div className="w-full">
            <table className="table-auto w-full">
                <thead>
                <tr className="bg-blue-600 text-white">
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Rail Identifier</th>
                    <th className="px-4 py-2">Mounting Interface</th>
                    <th className="px-4 py-2">Rail Type</th>
                    <th className="px-4 py-2" colSpan="5">Rack Types Supported</th>
                    <th className="px-4 py-2" colSpan="6">Rail Adjustability Range (mm)</th>
                    <th className="px-4 py-2" colSpan="2">Rail Depth (mm)</th>
                    {/* Add more headers if needed */}
                </tr>
                <tr className="bg-blue-600 text-white">
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th className="px-4 py-2" colSpan="3">4-Post</th>
                    <th className="px-4 py-2" colSpan="2">2-Post</th>
                    <th className="px-4 py-2" colSpan="2">Square</th>
                    <th className="px-4 py-2" colSpan="2">Round</th>
                    <th className="px-4 py-2" colSpan="2">Threaded</th>
                    <th className="px-4 py-2" colSpan="1">without
                        CMA/SRB
                    </th>
                    <th className="px-4 py-2" colSpan="1">with
                        CMA(SRB) </th>
                    <th></th>
                    <th></th>

                </tr>
                <tr className="bg-blue-600 text-white">
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th className="px-4 py-2">Square</th>
                    <th className="px-4 py-2">Round</th>
                    <th className="px-4 py-2">Thread</th>
                    <th className="px-4 py-2">Flush</th>
                    <th className="px-4 py-2">Center</th>
                    <th className="px-4 py-2">Min</th>
                    <th className="px-4 py-2">Max</th>
                    <th className="px-4 py-2">Min</th>
                    <th className="px-4 py-2">Max</th>
                    <th className="px-4 py-2">Min</th>
                    <th className="px-4 py-2">Max</th>
                    <th></th>
                    <th></th>
                    {/* Add more headers if needed */}
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                        <td className="border px-4 py-2">{row.Product}</td>
                        <td className="border px-4 py-2">{row.Rail_identifier}</td>
                        <td className="border px-4 py-2">{row.Mounting_interface}</td>
                        <td className="border px-4 py-2">{row.Rail_type}</td>
                        <td className="border px-4 py-2">{row.Rack_types_supported["4-Post"].Square}</td>
                        <td className="border px-4 py-2">{row.Rack_types_supported["4-Post"].Round}</td>
                        <td className="border px-4 py-2">{row.Rack_types_supported["4-Post"].Thread}</td>
                        <td className="border px-4 py-2">{row.Rack_types_supported["2-Post"].Flush}</td>
                        <td className="border px-4 py-2">{row.Rack_types_supported["2-Post"].Center}</td>
                        <td className="border px-4 py-2">{row.Rail_adjustability_range_mm.Square.min}</td>
                        <td className="border px-4 py-2">{row.Rail_adjustability_range_mm.Square.max}</td>
                        <td className="border px-4 py-2">{row.Rail_adjustability_range_mm.Round.min}</td>
                        <td className="border px-4 py-2">{row.Rail_adjustability_range_mm.Round.max}</td>
                        <td className="border px-4 py-2">{row.Rail_adjustability_range_mm.Thread.min}</td>
                        <td className="border px-4 py-2">{row.Rail_adjustability_range_mm.Thread.max}</td>
                        <td className="border px-4 py-2">{row.Rail_depth_mm.without}</td>
                        <td className="border px-4 py-2">{row.Rail_depth_mm.with}</td>
                        {/* Add more cells if needed */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
